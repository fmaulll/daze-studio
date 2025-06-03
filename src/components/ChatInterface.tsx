'use client'

import { useState, useRef, useEffect } from 'react';
import { format } from 'date-fns';
import { toPng } from 'html-to-image';
import { 
  TrashIcon, 
  ArrowDownTrayIcon, 
  ChevronLeftIcon, 
  EllipsisVerticalIcon, 
  VideoCameraIcon, 
  PhoneIcon, 
  PencilIcon,
  CheckIcon,
  ClockIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import { CheckIcon as CheckIconSolid } from '@heroicons/react/24/solid';
import Advertisement from './Advertisement';
import InterstitialModal from './InterstitialModal';

type MessageStatus = 'delivered' | 'pending' | 'not_delivered';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  image?: string;
  time: string;
  isEditing?: boolean;
  status: MessageStatus;
}

interface ChatSettings {
  chatType: 'whatsapp' | 'imessage';
  receiverName: string;
  userColor: string;
  receiverColor: string;
  currentTime: string;
  dateString: string;
  isEditingDate: boolean;
  defaultStatus: MessageStatus;
}

const DefaultProfilePic = () => (
  <div className="relative w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
    <svg 
      className="absolute w-[70%] h-[70%] text-gray-400" 
      fill="currentColor" 
      viewBox="0 0 24 24"
      style={{ 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)' 
      }}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
    </svg>
  </div>
);

const MessageStatusIcon = ({ status, isWhatsApp }: { status: MessageStatus, isWhatsApp: boolean }) => {
  const baseClass = "w-3.5 h-3.5";
  
  if (!isWhatsApp) return null; // Don't show status icons for iMessage

  switch (status) {
    case 'delivered':
      return (
        <div className="flex -space-x-2">
          <CheckIcon className={`${baseClass} text-[#53bdeb]`} />
          <CheckIcon className={`${baseClass} text-[#53bdeb]`} />
        </div>
      );
    case 'pending':
      return (
        <svg className={`${baseClass} text-gray-400`} viewBox="0 0 16 15" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-6.5V4h2v4.5l3.5 2-1 1.73-4.5-2.73z" />
        </svg>
      );
    case 'not_delivered':
      return (
        <CheckIcon className={`${baseClass} text-gray-400`} />
      );
  }
};

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<string | null>(null);
  const [isStatusMenuOpen, setIsStatusMenuOpen] = useState(false);
  const [isInterstitialOpen, setIsInterstitialOpen] = useState(false);
  
  const currentDate = new Date();
  const defaultWhatsAppDate = `${currentDate.getDate()} ${format(currentDate, 'MMM')} ${currentDate.getFullYear()}`;
  const defaultIMessageDate = `${format(currentDate, 'EEEE')} ${currentDate.getDate()} ${format(currentDate, 'MMM')} at ${format(currentDate, 'h:mm a')}`;

  const [settings, setSettings] = useState<ChatSettings>({
    chatType: 'whatsapp',
    receiverName: 'John Doe',
    userColor: '#DCF8C6',
    receiverColor: '#FFFFFF',
    currentTime: format(new Date(), 'HH:mm'),
    dateString: defaultWhatsAppDate,
    isEditingDate: false,
    defaultStatus: 'delivered'
  });
  const chatRef = useRef<HTMLDivElement>(null);

  const handleAddMessage = (isUser: boolean) => {
    if (!newMessage.trim()) return;
    
    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        text: newMessage,
        isUser,
        time: settings.currentTime,
        status: isUser ? settings.defaultStatus : 'delivered'
      }
    ]);
    setNewMessage('');
  };

  const handleEditMessage = (id: string) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, isEditing: true } : msg
    ));
  };

  const handleSaveEdit = (id: string, newText: string) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, text: newText, isEditing: false } : msg
    ));
  };

  const handleImageUpload = (isUser: boolean) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setMessages([
            ...messages,
            {
              id: Date.now().toString(),
              text: '',
              isUser,
              image: e.target?.result as string,
              time: settings.currentTime,
              status: isUser ? settings.defaultStatus : 'delivered'
            }
          ]);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleDeleteMessage = (id: string) => {
    setMessages(messages.filter(msg => msg.id !== id));
  };

  const handleStatusChange = (status: MessageStatus) => {
    setSettings(prev => ({ ...prev, defaultStatus: status }));
    setIsStatusMenuOpen(false);
  };

  const downloadScreenshot = async () => {
    setIsInterstitialOpen(true);
  };

  const handleDownloadComplete = async () => {
    if (chatRef.current) {
      try {
        const dataUrl = await toPng(chatRef.current, { quality: 1.0 });
        const link = document.createElement('a');
        link.download = 'chat-screenshot.png';
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('Error downloading screenshot:', err);
      }
    }
    setIsInterstitialOpen(false);
  };

  const isLastInGroup = (index: number) => {
    if (index === messages.length - 1) return true;
    const currentMessage = messages[index];
    const nextMessage = messages[index + 1];
    return currentMessage.isUser !== nextMessage.isUser;
  };

  const isFirstInGroup = (index: number) => {
    if (index === 0) return true;
    const currentMessage = messages[index];
    const previousMessage = messages[index - 1];
    return currentMessage.isUser !== previousMessage.isUser;
  };

  const handleDateClick = () => {
    setSettings(prev => ({ ...prev, isEditingDate: true }));
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings(prev => ({ ...prev, dateString: e.target.value }));
  };

  const handleDateBlur = () => {
    setSettings(prev => ({ ...prev, isEditingDate: false }));
  };

  const handleDateKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSettings(prev => ({ ...prev, isEditingDate: false }));
    }
  };

  useEffect(() => {
    setSettings(prev => ({
      ...prev,
      dateString: prev.chatType === 'whatsapp' ? defaultWhatsAppDate : defaultIMessageDate
    }));
  }, [settings.chatType]);

  return (
    <>
      {/* <Advertisement slot="YOUR_AD_SLOT_ID" /> */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Settings Panel */}
        <div className="p-4 border-b bg-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={settings.chatType}
              onChange={(e) => setSettings({ ...settings, chatType: e.target.value as 'whatsapp' | 'imessage' })}
            >
              <option value="whatsapp">WhatsApp Style</option>
              <option value="imessage">iMessage Style</option>
            </select>
            <input
              type="text"
              placeholder="Receiver's name"
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              value={settings.receiverName}
              onChange={(e) => setSettings({ ...settings, receiverName: e.target.value })}
            />
            {settings.chatType === 'whatsapp' && (
              <>
                <div>
                  <label className="block text-sm mb-1 text-gray-600">Your bubble color:</label>
                  <input
                    type="color"
                    value={settings.userColor}
                    onChange={(e) => setSettings({ ...settings, userColor: e.target.value })}
                    className="w-full h-10 rounded cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 text-gray-600">Receiver bubble color:</label>
                  <input
                    type="color"
                    value={settings.receiverColor}
                    onChange={(e) => setSettings({ ...settings, receiverColor: e.target.value })}
                    className="w-full h-10 rounded cursor-pointer"
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div ref={chatRef}>
          {/* Chat Header */}
          {settings.chatType === 'whatsapp' ? (
            <div className="bg-[#075E54] text-white p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <ChevronLeftIcon className="h-6 w-6" />
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <DefaultProfilePic />
                  </div>
                  <div>
                    <div className="font-semibold text-[15px] truncate max-w-[150px] sm:max-w-none">{settings.receiverName}</div>
                    <div className="text-xs opacity-80">online</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <VideoCameraIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  <EllipsisVerticalIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#f6f6f6] border-b">
              <div className="flex flex-col max-w-lg mx-auto px-4 pt-8 pb-2">
                <div className="flex items-center justify-center mb-1">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <DefaultProfilePic />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-base font-semibold text-black truncate max-w-[200px] mx-auto">{settings.receiverName}</div>
                  <div className="text-xs text-blue-500 mt-0.5">iMessage</div>
                </div>
              </div>
            </div>
          )}

          {/* Chat Area with Date and Messages */}
          <div 
            className={`${
              settings.chatType === 'whatsapp' ? 'whatsapp-bg' : 'imessage-bg'
            }`}
          >
            {/* Date Header */}
            <div className="pt-3 pb-1 flex justify-center">
              <div 
                className={`inline-block px-3 py-1 rounded-md text-center ${
                  settings.chatType === 'whatsapp' 
                    ? 'bg-[#E1F2FA] text-[#667781] text-[12.5px]' 
                    : 'bg-[#E9E9EB] text-[#8E8E93] text-xs'
                }`}
              >
                {settings.isEditingDate ? (
                  <input
                    type="text"
                    value={settings.dateString}
                    onChange={handleDateChange}
                    onBlur={handleDateBlur}
                    onKeyPress={handleDateKeyPress}
                    className="bg-transparent text-center focus:outline-none min-w-[120px]"
                    autoFocus
                  />
                ) : (
                  <span 
                    onClick={handleDateClick}
                    className="cursor-pointer hover:opacity-80"
                  >
                    {settings.dateString}
                  </span>
                )}
              </div>
            </div>

            {/* Messages */}
            <div className="p-4 min-h-[400px]">
              {messages.map((message, index) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} ${
                    !isFirstInGroup(index) ? 'mt-1' : 'mt-4'
                  }`}
                >
                  <div
                    onClick={() => setSelectedMessage(selectedMessage === message.id ? null : message.id)}
                    style={{
                      backgroundColor: settings.chatType === 'imessage' 
                        ? message.isUser ? '#007AFF' : '#E9E9EB'
                        : message.isUser ? settings.userColor : settings.receiverColor
                    }}
                    className={`message-bubble relative max-w-[85%] sm:max-w-[70%] p-3 shadow-sm cursor-pointer ${
                      settings.chatType === 'imessage'
                        ? message.isUser
                          ? `rounded-[20px] ${isLastInGroup(index) ? 'rounded-br-[5px]' : ''} text-white`
                          : `rounded-[20px] ${isLastInGroup(index) ? 'rounded-bl-[5px]' : ''} text-black`
                        : message.isUser
                        ? `rounded-lg ${isLastInGroup(index) ? 'rounded-tr-none' : ''}`
                        : `rounded-lg ${isLastInGroup(index) ? 'rounded-bl-none' : ''}`
                    }`}
                  >
                    {message.image ? (
                      <img src={message.image} alt="Chat image" className="max-w-full rounded" />
                    ) : message.isEditing ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          defaultValue={message.text}
                          className="w-full p-1 rounded border text-black bg-white"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                              handleSaveEdit(message.id, (e.target as HTMLInputElement).value);
                            }
                          }}
                          onBlur={(e) => handleSaveEdit(message.id, e.target.value)}
                          autoFocus
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    ) : (
                      <p className="break-words">{message.text}</p>
                    )}
                    <div className="flex items-center justify-end gap-1 mt-1">
                      {settings.chatType === 'whatsapp' && (
                        <>
                          <div className="text-xs opacity-70">{message.time}</div>
                          {message.isUser && (
                            <MessageStatusIcon status={message.status} isWhatsApp={true} />
                          )}
                        </>
                      )}
                    </div>
                    {selectedMessage === message.id && (
                      <div className="absolute -top-2 -right-2 flex gap-1">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEditMessage(message.id);
                          }}
                          className="bg-blue-500 text-white rounded-full p-1"
                        >
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteMessage(message.id);
                          }}
                          className="bg-red-500 text-white rounded-full p-1"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Controls */}
        <div className="p-4 border-t bg-white space-y-4">
          {/* Time and Status Controls */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm mb-1 text-gray-600">Message Time:</label>
              <input
                type="time"
                className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                value={settings.currentTime}
                onChange={(e) => setSettings({ ...settings, currentTime: e.target.value })}
              />
            </div>
            {settings.chatType === 'whatsapp' && (
              <div className="flex-1">
                <label className="block text-sm mb-1 text-gray-600">Default Status:</label>
                <div className="relative">
                  <button
                    onClick={() => setIsStatusMenuOpen(!isStatusMenuOpen)}
                    className="w-full border rounded p-2 flex items-center justify-between bg-white"
                  >
                    <span className="flex items-center gap-2">
                      <MessageStatusIcon status={settings.defaultStatus} isWhatsApp={true} />
                      {settings.defaultStatus.charAt(0).toUpperCase() + settings.defaultStatus.slice(1).replace('_', ' ')}
                    </span>
                  </button>
                  {isStatusMenuOpen && (
                    <div className="absolute bottom-full left-0 right-0 mb-1 bg-white shadow-lg rounded-lg p-1 z-20">
                      {['delivered', 'pending', 'not_delivered'].map((status) => (
                        <button 
                          key={status}
                          onClick={() => handleStatusChange(status as MessageStatus)}
                          className="w-full px-2 py-1 hover:bg-gray-100 rounded text-sm whitespace-nowrap flex items-center gap-2"
                        >
                          <MessageStatusIcon status={status as MessageStatus} isWhatsApp={true} />
                          {status.charAt(0).toUpperCase() + status.slice(1).replace('_', ' ')}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Message Input and Buttons */}
          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="w-full border rounded-full px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              onKeyPress={(e) => e.key === 'Enter' && handleAddMessage(true)}
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <button
                onClick={() => handleAddMessage(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors text-sm sm:text-base"
              >
                Send as You
              </button>
              <button
                onClick={() => handleAddMessage(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors text-sm sm:text-base"
              >
                Send as Them
              </button>
              <button
                onClick={() => handleImageUpload(true)}
                className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors text-sm sm:text-base"
              >
                Your Image
              </button>
              <button
                onClick={() => handleImageUpload(false)}
                className="px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors text-sm sm:text-base"
              >
                Their Image
              </button>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="p-4 border-t bg-gray-50">
          <button
            onClick={downloadScreenshot}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowDownTrayIcon className="w-5 h-5" />
            <span className="text-sm sm:text-base">Download Screenshot</span>
          </button>
        </div>
      </div>
      {/* <Advertisement slot="YOUR_AD_SLOT_ID_2" /> */}
      <InterstitialModal 
        isOpen={isInterstitialOpen}
        onClose={() => setIsInterstitialOpen(false)}
        onComplete={handleDownloadComplete}
      />
    </>
  );
} 