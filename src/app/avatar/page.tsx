'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AvatarSelector from '@/components/avatar/avatar-selector';
import { Avatar } from '@/types/avatar';

export default function AvatarPage() {
  const router = useRouter();
  const [selectedAvatar, setSelectedAvatar] = useState<Avatar | null>(null);

  // ローカルストレージからアバター選択を確認
  useEffect(() => {
    const savedAvatar = localStorage.getItem('selectedAvatar');
    if (savedAvatar) {
      // すでにアバターが選択されている場合はマップページにリダイレクト
      router.push('/map');
    }
  }, [router]);

  const handleAvatarSelect = (avatar: Avatar) => {
    setSelectedAvatar(avatar);
  };

  const handleConfirm = () => {
    if (selectedAvatar) {
      // 選択されたアバターをローカルストレージに保存
      localStorage.setItem('selectedAvatar', JSON.stringify(selectedAvatar));
      // マップページにリダイレクト
      router.push('/map');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-8">
          アバターを選択してください
        </h1>
        
        <AvatarSelector 
          onSelect={handleAvatarSelect} 
          selectedAvatar={selectedAvatar}
        />
        
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleConfirm}
            disabled={!selectedAvatar}
            className={`px-6 py-3 rounded-full font-medium text-white ${
              selectedAvatar 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-gray-400 cursor-not-allowed'
            }`}
          >
            選択を確定する
          </button>
        </div>
      </div>
    </div>
  );
}
