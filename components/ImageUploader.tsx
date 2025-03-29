'use client';

import { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import { convertToGhibliStyle, mockConvertToGhibliStyle } from '@/lib/api';

// 图片上传组件 - 处理图片上传和转换为吉卜力风格
export default function ImageUploader() {
  // 状态管理
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // 用户上传的原始图片
  const [convertedImage, setConvertedImage] = useState<string | null>(null); // 转换后的图片
  const [isConverting, setIsConverting] = useState(false); // 转换进行中状态
  const [isDragging, setIsDragging] = useState(false); // 拖拽状态
  const [error, setError] = useState<string | null>(null); // 错误信息
  const fileInputRef = useRef<HTMLInputElement>(null); // 文件输入引用

  // 处理文件选择变化
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        setConvertedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  // 处理拖拽悬停
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // 处理拖拽离开
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  // 处理文件拖放
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result as string);
        setConvertedImage(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  // 处理上传区点击
  const handleClick = () => {
    if (!selectedImage) {
      fileInputRef.current?.click();
    }
  };

  // 处理删除图片
  const handleDeleteImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // 防止触发上传区域的点击事件
    setSelectedImage(null);
    setConvertedImage(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // 处理重新上传
  const handleReupload = (e: React.MouseEvent) => {
    e.stopPropagation(); // 防止触发上传区域的点击事件
    fileInputRef.current?.click();
  };

  // 处理转换为吉卜力风格
  const handleConvertToGhibliStyle = async () => {
    if (!selectedImage) return;
    
    setIsConverting(true);
    setError(null);
    
    try {
      // 在开发环境中使用模拟API，在生产环境中使用真实API
      // 这里使用模拟API进行演示
      const result = await mockConvertToGhibliStyle(selectedImage);
      // const result = await convertToGhibliStyle(selectedImage);
      
      setConvertedImage(result);
    } catch (err) {
      console.error('Conversion failed:', err);
      setError('Image conversion failed. Please try again or choose another image.');
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <div
          className={`drop-zone p-8 text-center cursor-pointer transition-all ${
            isDragging ? 'active' : ''
          } ${selectedImage ? 'relative' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          
          {selectedImage ? (
            <div className="relative w-full h-64 md:h-80">
              <Image
                src={selectedImage}
                alt="Uploaded image"
                fill
                style={{ objectFit: 'contain' }}
                className="rounded-lg"
              />
              <div className="absolute top-2 right-2 flex space-x-2">
                <button
                  onClick={handleReupload}
                  className="bg-[var(--apple-blue)] text-white p-2 rounded-full hover:bg-[var(--apple-blue-hover)] transition-all"
                  aria-label="Reupload"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </button>
                <button
                  onClick={handleDeleteImage}
                  className="bg-[var(--apple-error)] text-white p-2 rounded-full hover:bg-red-600 transition-all"
                  aria-label="Delete image"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8">
              <svg
                className="w-12 h-12 text-gray-400 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="text-lg font-medium">
                Click or drag and drop an image here
              </p>
              <p className="text-sm mt-2">
                Supports JPG, PNG, and GIF formats
              </p>
            </div>
          )}
        </div>
      </div>

      {selectedImage && (
        <div className="mb-8">
          <div className="mt-6 text-center">
            <button
              onClick={handleConvertToGhibliStyle}
              disabled={isConverting}
              className="button"
            >
              {isConverting ? (
                <span className="flex items-center justify-center">
                  <div className="spinner mr-2"></div>
                  Converting...
                </span>
              ) : (
                'Generate Ghibli Style Image'
              )}
            </button>
          </div>
          {error && (
            <div className="mt-4 text-center text-[var(--apple-error)]">
              {error}
            </div>
          )}
        </div>
      )}

      {convertedImage && (
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 text-center">Ghibli Style Image</h3>
          <div className="card relative w-full h-64 md:h-96 overflow-hidden">
            <Image
              src={convertedImage}
              alt="Ghibli style image"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="mt-6 text-center">
            <a 
              href={convertedImage} 
              download="ghibli-style-image.jpg"
              className="button bg-[var(--apple-success)]"
            >
              Download Image
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
