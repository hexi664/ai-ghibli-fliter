import React from 'react';
import Image from 'next/image';
import gpt4oExamples from '@/lib/gpt4oExamples';

// 展示案例部分组件 - 显示GPT-4o生成的吉卜力风格图片示例
const ExamplesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 标题部分 */}
        <h2 className="text-3xl font-semibold text-center mb-12">Ghibli Style Examples by GPT-4o</h2>
        
        {/* 案例网格布局 - 在移动设备上为单列，中等屏幕及以上为双列 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 遍历所有案例并渲染 */}
          {gpt4oExamples.map((example) => (
            <div key={example.id} className="card overflow-hidden">
              <div className="p-6">
                {/* 案例标题 */}
                <h3 className="text-xl font-medium mb-2">{example.title}</h3>
                {/* 案例描述 */}
                <p className="text-gray-600 mb-4">{example.description}</p>
                
                {/* 图片容器 - 只展示转换后的图片 */}
                <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                  <Image 
                    src={example.afterImage} 
                    alt={`${example.title} - Ghibli style transformation`}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="transition-all hover:scale-105"
                  />
                </div>
                
                {/* 图片来源信息 */}
                <div className="text-sm text-gray-500 mt-2 text-right">
                  <p>Source: {example.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
