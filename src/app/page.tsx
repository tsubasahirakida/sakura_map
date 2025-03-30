'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // ルートページにアクセスした場合、アバター選択画面にリダイレクト
    router.push('/avatar');
  }, [router]);

  // リダイレクト中の表示
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-green-800 text-lg">読み込み中...</p>
      </div>
    </div>
  );
}
