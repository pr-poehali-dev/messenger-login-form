import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [showRecovery, setShowRecovery] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', loginData);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', registerData);
  };

  const handleRecovery = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Recovery attempt:', recoveryEmail);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-3 gap-8">
        
        {/* Основная форма логина */}
        <div className="lg:col-span-2">
          <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/80 backdrop-blur animate-fade-in">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center">
                <Icon name="MessageCircle" size={32} className="text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Messenger</CardTitle>
              <p className="text-gray-600 text-sm">Войдите в свой аккаунт</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {!showRecovery ? (
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Логин"
                      value={loginData.username}
                      onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                      className="h-12 text-base border-gray-200 focus:border-primary"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Input
                      type="password"
                      placeholder="Пароль"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      className="h-12 text-base border-gray-200 focus:border-primary"
                      required
                    />
                  </div>

                  {is2FAEnabled && (
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="Код двухфакторной аутентификации"
                        className="h-12 text-base border-gray-200 focus:border-primary"
                        maxLength={6}
                      />
                      <p className="text-xs text-gray-500">Введите 6-значный код из приложения</p>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Switch 
                        checked={is2FAEnabled}
                        onCheckedChange={setIs2FAEnabled}
                        id="2fa"
                      />
                      <label htmlFor="2fa" className="text-gray-600">2FA</label>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowRecovery(true)}
                      className="text-primary hover:underline"
                    >
                      Забыли пароль?
                    </button>
                  </div>
                  
                  <Button type="submit" className="w-full h-12 text-base font-medium bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary">
                    <Icon name="LogIn" size={20} className="mr-2" />
                    Войти
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleRecovery} className="space-y-4">
                  <div className="text-center mb-4">
                    <Icon name="Mail" size={48} className="mx-auto text-primary mb-3" />
                    <h3 className="text-lg font-semibold">Восстановление пароля</h3>
                    <p className="text-sm text-gray-600">Введите email для восстановления</p>
                  </div>
                  
                  <Input
                    type="email"
                    placeholder="Ваш email"
                    value={recoveryEmail}
                    onChange={(e) => setRecoveryEmail(e.target.value)}
                    className="h-12 text-base border-gray-200 focus:border-primary"
                    required
                  />
                  
                  <div className="flex gap-3">
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setShowRecovery(false)}
                      className="flex-1"
                    >
                      Назад
                    </Button>
                    <Button type="submit" className="flex-1 bg-gradient-to-r from-primary to-blue-600">
                      Отправить
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Дополнительные разделы */}
        <div className="space-y-6">
          

          {/* Профиль пользователя */}
          <Card className="shadow-lg border-0 bg-white/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="User" size={20} />
                Профиль
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <Avatar className="w-12 h-12">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary/10 text-primary">ПО</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Пользователь</p>
                  <p className="text-sm text-gray-500">user@example.com</p>
                  <p className="text-xs text-gray-400">ООО "Технологии Будущего"</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Двухфакторная аутентификация</span>
                  <Badge variant={is2FAEnabled ? "default" : "secondary"}>
                    {is2FAEnabled ? "Включена" : "Выключена"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Статус</span>
                  <Badge className="bg-messenger-success text-white">Онлайн</Badge>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Icon name="Settings" size={16} className="mr-2" />
                Настройки профиля
              </Button>
            </CardContent>
          </Card>

          {/* Помощь и поддержка */}
          <Card className="shadow-lg border-0 bg-white/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="HelpCircle" size={20} />
                Помощь и поддержка
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start h-10">
                  <Icon name="FileText" size={16} className="mr-2" />
                  FAQ
                </Button>
                <Button variant="ghost" className="w-full justify-start h-10">
                  <Icon name="MessageSquare" size={16} className="mr-2" />
                  Чат поддержки
                </Button>
                <Button variant="ghost" className="w-full justify-start h-10">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Горячая линия
                </Button>
                <Button variant="ghost" className="w-full justify-start h-10">
                  <Icon name="Mail" size={16} className="mr-2" />
                  Написать в поддержку
                </Button>
              </div>
              
              <Alert className="border-messenger-blue/20 bg-messenger-blue/10">
                <Icon name="Info" size={16} />
                <AlertDescription className="text-sm">
                  Время ответа службы поддержки: до 2 часов в рабочее время
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Дополнительная безопасность */}
          <Card className="shadow-lg border-0 bg-white/70 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Shield" size={20} />
                Безопасность
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="Smartphone" size={16} className="text-messenger-success" />
                  <span className="text-sm">SMS-коды</span>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-messenger-blue" />
                  <span className="text-sm">Email-уведомления</span>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="Lock" size={16} className="text-messenger-danger" />
                  <span className="text-sm">Блокировка сессий</span>
                </div>
                <Switch />
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                <Icon name="Key" size={16} className="mr-2" />
                Сменить пароль
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;