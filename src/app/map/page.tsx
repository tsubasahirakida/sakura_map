'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Avatar } from '@/types/avatar';

export default function MapPage() {
  const router = useRouter();
  const [avatar, setAvatar] = useState<Avatar | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ローカルストレージからアバター情報を取得
    const savedAvatar = localStorage.getItem('selectedAvatar');
    
    if (!savedAvatar) {
      // アバターが選択されていない場合はアバター選択画面にリダイレクト
      router.push('/avatar');
      return;
    }
    
    try {
      const parsedAvatar = JSON.parse(savedAvatar);
      setAvatar(parsedAvatar);
    } catch (error) {
      console.error('アバターデータの解析に失敗しました:', error);
      // エラーが発生した場合もアバター選択画面にリダイレクト
      router.push('/avatar');
      return;
    }
    
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-green-800 text-lg">読み込み中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-green-50 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-800">桜マップ</h1>
          
          {avatar && (
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 mr-3">
                {avatar.name.charAt(0)}
              </div>
              <span className="font-medium">{avatar.name}</span>
            </div>
          )}
        </header>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-green-800 mb-4">日本の桜開花状況</h2>
          
          <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
            <p className="text-gray-500">ここに日本地図が表示されます</p>
          </div>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* サンプルの桜スポット */}
            {['東京', '京都', '福岡', '北海道', '大阪', '宮城'].map((location) => (
              <div key={location} className="border border-gray-200 rounded-lg p-4 hover:bg-green-50 cursor-pointer transition-colors">
                <h3 className="font-bold text-lg">{location}</h3>
                <p className="text-sm text-gray-600">開花状況: 満開</p>
                <p className="text-xs text-gray-500 mt-2">クリックして訪問</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
