'use client';

// 将来的に使用する可能性があるためコメントアウト
// import { useState, useEffect } from 'react';
// import Image from 'next/image';
import { Avatar } from '@/types/avatar';

// サンプルアバターデータ
const avatarOptions: Avatar[] = [
  {
    id: '1',
    name: 'ハナコ',
    type: 'female',
    imagePath: '/avatars/female-1.png',
    description: '桜の季節が大好きな女の子'
  },
  {
    id: '2',
    name: 'タロウ',
    type: 'male',
    imagePath: '/avatars/male-1.png',
    description: '冒険が好きな男の子'
  },
  {
    id: '3',
    name: 'モモ',
    type: 'female',
    imagePath: '/avatars/female-2.png',
    description: '写真撮影が趣味の女の子'
  },
  {
    id: '4',
    name: 'ケン',
    type: 'male',
    imagePath: '/avatars/male-2.png',
    description: '植物に詳しい男の子'
  },
  {
    id: '5',
    name: 'ポチ',
    type: 'animal',
    imagePath: '/avatars/animal-1.png',
    description: '元気いっぱいの子犬'
  }
];

interface AvatarSelectorProps {
  onSelect: (avatar: Avatar) => void;
  selectedAvatar: Avatar | null;
}

export default function AvatarSelector({ onSelect, selectedAvatar }: AvatarSelectorProps) {
  // アバターの選択処理
  const handleSelect = (avatar: Avatar) => {
    onSelect(avatar);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {avatarOptions.map((avatar) => (
          <div
            key={avatar.id}
            onClick={() => handleSelect(avatar)}
            className={`
              border-2 rounded-lg p-4 cursor-pointer transition-all
              ${selectedAvatar?.id === avatar.id 
                ? 'border-green-500 bg-green-50 transform scale-105' 
                : 'border-gray-200 hover:border-green-300 hover:bg-green-50'
              }
            `}
          >
            <div className="flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full border-2 border-gray-200">
                {/* 実際の画像がない場合はプレースホルダーを表示 */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                  {avatar.name.charAt(0)}
                </div>
                {/* 画像が存在する場合は表示（開発時はコメントアウト） */}
                {/* 
                <Image
                  src={avatar.imagePath}
                  alt={avatar.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
                */}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{avatar.name}</h3>
              <p className="text-sm text-gray-600 text-center mt-2">{avatar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
