// 示例数据 - 包含GPT-4o生成的吉卜力风格图片示例
const gpt4oExamples = [
  {
    id: 'portrait', // 唯一标识符
    title: 'ghibli art', // 示例标题
    description: 'GPT-4o transforms real portrait photos into Ghibli style', // 示例描述
    beforeImage: '/examples/gpt4o/original_portrait.webp', // 转换前图片路径
    afterImage: '/examples/gpt4o/ghibli_portrait.jpeg', // 转换后图片路径 (需要替换为实际的转换后图片)
    source: 'Zhihu article "How powerful is GPT-4o\'s image editing? Even Midjourney CEO is impressed"' // 来源信息
  },
  {
    id: 'miyazaki', // 唯一标识符
    title: 'ghibli art', // 示例标题
    description: 'GPT-4o transforms Hayao Miyazaki\'s real photo into his own ghibli art style', // 示例描述
    beforeImage: '/examples/gpt4o/miyazaki_real.png', // 原始图片路径
    afterImage: '/examples/gpt4o/miyazaki_ghibli.jpg', // 转换后图片路径 (需要替换为实际的转换后图片)
    source: 'Tencent News "Testing GPT-4o Ghibli Cartoon Style"' // 来源信息
  },
  {
    id: 'landscape', // 唯一标识符
    title: 'ghibli art', // 示例标题
    description: 'Transform realistic nature photos into dreamy Ghibli-style scenes', // 示例描述
    beforeImage: '/examples/gpt4o/landscape_real.jpg', // 原始图片路径
    afterImage: '/examples/gpt4o/landscape_ghibli.jpg', // 转换后图片路径
    source: 'AI Ghibli Filter Examples Gallery' // 来源信息
  },
  {
    id: 'city', // 唯一标识符
    title: 'ghibli art', // 示例标题
    description: 'Urban landscapes reimagined in the magical Ghibli art style', // 示例描述
    beforeImage: '/examples/gpt4o/city_real.jpg', // 原始图片路径
    afterImage: '/examples/gpt4o/city_ghibli.jpg', // 转换后图片路径
    source: 'AI Ghibli Filter Examples Gallery' // 来源信息
  }
];

export default gpt4oExamples;
