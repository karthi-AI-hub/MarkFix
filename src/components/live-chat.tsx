import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Minimize2, FileText, ThumbsUp, Smile, Paperclip, User, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

// Add custom styles for animations
const styles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  .animate-fade-in {
    animation: fade-in 0.3s ease-out forwards;
  }
  
  @keyframes bounce-gentle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
  
  .animate-bounce-gentle {
    animation: bounce-gentle 2s infinite;
  }
`;

const LiveChat = () => {
  // Inject styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isConnected, setIsConnected] = useState(true);
  const [unreadCount, setUnreadCount] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! Welcome to MarkFix 👋 I'm here to help you with any questions about our digital marketing services. How can I assist you today?",
      sender: "support",
      timestamp: new Date().toLocaleTimeString(),
      avatar: "🤖",
    },
  ]);
  const { toast } = useToast();

  // Quick reply options
  const quickReplies = [
    "What services do you offer?",
    "Show me pricing packages",
    "I want to see your results",
    "How does automation work?",
    "Schedule a free consultation",
    "SEO audit request"
  ];

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Simulate connection status changes
  useEffect(() => {
    const interval = setInterval(() => {
      setIsConnected(prev => Math.random() > 0.1 ? true : prev); // 90% uptime simulation
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: message,
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
      avatar: "👤",
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage("");
    setIsTyping(true);

    // Simulate typing and auto-response
    setTimeout(() => {
      setIsTyping(false);
      const autoResponse = getSmartResponse(message);
      setMessages(prev => [...prev, autoResponse]);
      
      if (!isOpen) {
        setUnreadCount(prev => prev + 1);
      }
    }, 2000);

    // toast({
    //   title: "Message Sent",
    //   description: "We'll respond to you shortly!",
    // });
  };

  const handleQuickReply = (reply: string) => {
    setMessage(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  const getSmartResponse = (userMessage: string) => {
    const msg = userMessage.toLowerCase();
    let responseText = "";
    
    // Greeting responses
    if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey") || msg.match(/^(good morning|good afternoon|good evening)/)) {
      responseText = "Hello! 👋 Welcome to MarkFix! I'm here to help you grow your business through digital marketing. What would you like to know about our services?";
    }
    
    // Services inquiries
    else if (msg.includes("service") || msg.includes("what do you do") || msg.includes("what can you help")) {
      responseText = "We specialize in digital marketing services including:\n\n🎯 SEO & Content Marketing\n📱 Social Media Management\n🤖 Marketing Automation\n📊 PPC Advertising\n🎨 Brand Strategy\n\nWhich area interests you most?";
    }
    
    // Pricing inquiries
    else if (msg.includes("price") || msg.includes("cost") || msg.includes("pricing") || msg.includes("budget") || msg.includes("how much")) {
      responseText = "Great question! Our pricing depends on your specific needs:\n\n💡 Starter Package: ₹15,000/month\n🚀 Professional: ₹35,000/month\n⭐ Enterprise: ₹75,000/month\n\nWant a custom quote? Let's discuss your goals! 📞 +91 63749 95530";
    }
    
    // Contact & scheduling
    else if (msg.includes("contact") || msg.includes("call") || msg.includes("meet") || msg.includes("appointment") || msg.includes("schedule")) {
      responseText = "Perfect! Let's connect:\n\n📞 Call: +91 63749 95530\n📧 Email: markfixofficial@gmail.com\n📍 Location: Salem, Tamil Nadu\n\nI can also help you schedule a free 30-minute strategy session. When works best for you?";
    }
    
    // Automation tools
    else if (msg.includes("automation") || msg.includes("tool") || msg.includes("instagram") || msg.includes("facebook") || msg.includes("linkedin") || msg.includes("whatsapp")) {
      responseText = "Our automation tools are game-changers! 🚀\n\n✨ Instagram Auto-posting\n📘 Facebook Campaign Management\n💼 LinkedIn Lead Generation\n💬 WhatsApp Business Automation\n\nResult: Save 80% time + 300% better engagement! Want a demo?";
    }
    
    // SEO specific
    else if (msg.includes("seo") || msg.includes("ranking") || msg.includes("google") || msg.includes("search")) {
      responseText = "SEO is our expertise! 📈\n\n🔍 Keyword Research & Strategy\n📝 Content Optimization\n🔗 Link Building\n⚡ Technical SEO\n📊 Analytics & Reporting\n\nWe've helped clients achieve 300% increase in organic traffic. Need an SEO audit?";
    }
    
    // Social media
    else if (msg.includes("social media") || msg.includes("content") || msg.includes("post") || msg.includes("engagement")) {
      responseText = "Social media is where brands come alive! 📱\n\n📈 Strategy Development\n🎨 Content Creation\n📅 Posting Schedules\n👥 Community Management\n📊 Performance Analytics\n\nWhich platform is your priority: Instagram, Facebook, or LinkedIn?";
    }
    
    // ROI and results
    else if (msg.includes("result") || msg.includes("roi") || msg.includes("growth") || msg.includes("success") || msg.includes("case study")) {
      responseText = "Our results speak for themselves! 📊\n\n✅ 300% average engagement increase\n✅ 250% boost in lead generation\n✅ 80% time saved through automation\n✅ 500+ satisfied clients\n\nWant to see specific case studies for your industry?";
    }
    
    // Timeline questions
    else if (msg.includes("how long") || msg.includes("timeline") || msg.includes("when") || msg.includes("start")) {
      responseText = "Great question about timing! ⏰\n\n🚀 Setup: 1-2 weeks\n📈 Initial results: 4-6 weeks\n🎯 Significant growth: 3-6 months\n\nWe can start as early as next week! Ready to begin your digital transformation?";
    }
    
    // Competition and differentiation
    else if (msg.includes("why choose") || msg.includes("different") || msg.includes("better") || msg.includes("compare")) {
      responseText = "What makes MarkFix special? 🌟\n\n🤖 AI-Powered Automation\n📊 Data-Driven Strategies\n👨‍💼 Dedicated Account Managers\n🎯 Custom Solutions\n📈 Proven Track Record\n💡 Latest Industry Trends\n\nWe're not just vendors - we're growth partners!";
    }
    
    // Help and support
    else if (msg.includes("help") || msg.includes("support") || msg.includes("assist") || msg.includes("question")) {
      responseText = "I'm here to help! 🤝 Here are some popular questions:\n\n• What services do you offer?\n• How much does it cost?\n• Can I see your results?\n• How do I get started?\n• Do you offer automation?\n\nJust ask me anything about digital marketing!";
    }
    
    // Thank you responses
    else if (msg.includes("thank") || msg.includes("thanks")) {
      responseText = "You're very welcome! 😊 I'm always here to help with your digital marketing questions. Is there anything else you'd like to know about growing your business?";
    }
    
    // Default intelligent response with suggestions
    else {
      const responses = [
        "I'd love to help you with that! 🚀 Could you tell me more about:\n• Your business goals?\n• Specific marketing challenges?\n• Which services interest you?\n\nOr feel free to ask about our pricing, results, or automation tools!",
        
        "Great to connect! 💡 I can help you with:\n\n📈 Digital Marketing Strategy\n🤖 Automation Solutions\n📊 SEO & Analytics\n💰 Pricing Information\n\nWhat's your biggest marketing challenge right now?",
        
        "Thanks for reaching out! 🎯 I'm here to help you grow your business. You can ask me about:\n\n• Our services & pricing\n• Success stories & results\n• Automation tools\n• Getting started\n\nWhat interests you most?"
      ];
      
      responseText = responses[Math.floor(Math.random() * responses.length)];
    }

    return {
      id: Date.now() + 1,
      text: responseText,
      sender: "support",
      timestamp: new Date().toLocaleTimeString(),
      avatar: "🤖",
    };
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <div className="relative">
          <Button
            onClick={() => {
              setIsOpen(true);
              setUnreadCount(0);
            }}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:from-purple-700 hover:via-pink-600 hover:to-red-600 shadow-xl transition-all duration-500 hover:scale-110 animate-bounce-gentle focus:outline-none focus:ring-4 focus:ring-purple-200"
            aria-label="Open live chat support"
          >
            <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
          </Button>
          
          {unreadCount > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white min-w-5 h-5 sm:min-w-6 sm:h-6 flex items-center justify-center text-xs font-bold animate-pulse" aria-label={`${unreadCount} unread messages`}>
              {unreadCount > 9 ? '9+' : unreadCount}
            </Badge>
          )}
          
          <div className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2">
            <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'} border-2 border-white ${isConnected ? 'animate-pulse' : ''}`} aria-hidden="true"></div>
          </div>
        </div>
        
        {/* Welcome tooltip - hidden on mobile, shown on hover on desktop */}
        <div className="hidden sm:block absolute bottom-20 right-0 bg-white rounded-lg shadow-lg p-3 max-w-xs transform opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gray-200 pointer-events-none">
          <div className="text-sm text-gray-800 font-medium">Need help? Chat with us! 💬</div>
          <div className="text-xs text-gray-500 mt-1">We typically reply in under 2 minutes</div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      <Card 
        className={`w-[95vw] sm:w-96 max-w-md shadow-2xl border-0 transition-all duration-500 transform ${
          isMinimized ? "h-20 scale-95" : "h-[85vh] sm:h-[32rem] scale-100"
        } bg-white/95 backdrop-blur-lg rounded-2xl overflow-hidden`}
        role="dialog"
        aria-label="Live chat support"
        aria-describedby="chat-description"
      >
        <CardHeader className="p-3 sm:p-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <div className="w-8 sm:w-10 h-8 sm:h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Bot className="h-4 sm:h-5 w-4 sm:w-5 text-white" />
                </div>
                <div className={`absolute -bottom-1 -right-1 w-3 sm:w-4 h-3 sm:h-4 rounded-full border-2 border-white ${
                  isConnected ? 'bg-green-500' : 'bg-red-500'
                } ${isConnected ? 'animate-pulse' : ''}`}
                aria-hidden="true"></div>
              </div>
              <div>
                <CardTitle className="text-sm sm:text-base font-semibold">MarkFix Assistant</CardTitle>
                <div className="flex items-center space-x-1">
                  <span className="text-xs sm:text-sm text-white/90" aria-live="polite">
                    {isConnected ? '🟢 Online' : '🔴 Connecting...'}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex space-x-1 sm:space-x-2">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-white/20 h-7 w-7 sm:h-8 sm:w-8 p-0 rounded-full transition-all duration-200"
                aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
              >
                <Minimize2 className="h-3 sm:h-4 w-3 sm:w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-7 w-7 sm:h-8 sm:w-8 p-0 rounded-full transition-all duration-200"
                aria-label="Close chat"
              >
                <X className="h-3 sm:h-4 w-3 sm:w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[calc(85vh-5rem)] sm:h-[28rem]" id="chat-description"
          aria-description="Live chat conversation with MarkFix support team">
            {/* Messages */}
            <div className="flex-1 p-2 sm:p-4 space-y-3 sm:space-y-4 overflow-y-auto bg-gradient-to-b from-gray-50 to-white"
            role="log" aria-label="Chat messages" aria-live="polite">
              {messages.map((msg, index) => (
                <div
                  key={msg.id}
                  className={`flex items-end space-x-2 ${msg.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {msg.sender !== "user" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {msg.avatar}
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[85%] sm:max-w-[75%] p-2 sm:p-3 rounded-2xl text-xs sm:text-sm shadow-md transition-all duration-200 hover:shadow-lg ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-md"
                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-md"
                    }`}
                    role="article"
                    aria-label={`Message from ${msg.sender === "user" ? "you" : "support"}`}
                  >
                    <p className="leading-relaxed">{msg.text}</p>
                    <span className={`text-xs block mt-2 ${
                      msg.sender === "user" ? "text-white/80" : "text-gray-500"
                    }`}>
                      {msg.timestamp}
                    </span>
                  </div>
                  
                  {msg.sender === "user" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {msg.avatar}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center space-x-2 animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                    🤖
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-bl-md shadow-md border border-gray-200">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Quick Replies - Always Visible */}
            <div className="px-4 py-2 border-t border-gray-200 bg-white">
              <div className="text-xs text-gray-500 mb-2">Quick replies:</div>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs px-3 py-1 h-auto rounded-full bg-gray-50 hover:border-purple-300 transition-all duration-200"
                  >
                    {reply}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4 border-t border-gray-200 bg-white">
              <div className="flex space-x-2 items-end">
                <div className="flex-1 relative">
                  <Textarea
                    placeholder="Type your message... 💬"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={!isConnected}
                    className="min-h-[40px] sm:min-h-[44px] max-h-[80px] sm:max-h-[100px] resize-none pr-16 sm:pr-20 rounded-2xl border-gray-300 focus:border-purple-500 focus:ring-purple-500 transition-all duration-200 text-sm"
                    aria-label="Type your message"
                  />
                  <div className="absolute right-2 bottom-2 flex space-x-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 sm:h-8 sm:w-8 p-0 rounded-full hover:bg-gray-100 text-gray-500"
                      aria-label="Add emoji"
                      tabIndex={-1}
                    >
                      <Smile className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-6 w-6 sm:h-8 sm:w-8 p-0 rounded-full hover:bg-gray-100 text-gray-500"
                      aria-label="Attach file"
                      tabIndex={-1}
                    >
                      <Paperclip className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!message.trim() || !isConnected}
                  className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white rounded-full h-10 w-10 sm:h-11 sm:w-11 p-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500" aria-live="polite">
                  {isConnected ? "Press Enter to send" : "Connecting..."}
                </p>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <ThumbsUp className="h-3 w-3" />
                  <span className="hidden sm:inline">Powered by MarkFix AI</span>
                  <span className="sm:hidden">MarkFix AI</span>
                </div>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default LiveChat;