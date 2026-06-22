import React from 'react';
import { Undo, Ellipsis } from 'lucide-react';

// 定义组件的属性接口
interface TopbarProps {
  title?: string;                 // 顶部栏标题
  showLeftIcon?: boolean;       // 是否显示左侧图标（默认显示）
  showRightIcon?: boolean;      // 是否显示右侧图标（默认显示）
  leftIcon?: React.ReactNode;   // 自定义左侧图标
  rightIcon?: React.ReactNode;  // 自定义右侧图标
}

const Topbar: React.FC<TopbarProps> = ({
  title = "",
  showLeftIcon = true,
  showRightIcon = true,
  leftIcon = <Undo/>,
  rightIcon = <Ellipsis/>,
}) => {
  return (
    <header className="sticky top-0 z-50 flex h-14 w-full items-center justify-between border-b border-gray-100 bg-white px-4 shadow-sm safe-top">
      {/* 左侧区域：纯展示图标 */}
      <div className="flex min-w-[40px] items-center justify-start text-gray-700">
        {showLeftIcon && (
          leftIcon
        )}
      </div>

      {/* 中间区域：标题 */}
      <div className="flex-1 text-center">
        <h1 className="truncate text-lg font-bold text-gray-800 px-2">
          {title}
        </h1>
      </div>

      {/* 右侧区域：纯展示图标 */}
      <div className="flex min-w-[40px] items-center justify-end text-gray-700">
        {showRightIcon && (
          rightIcon
        )}
      </div>
    </header>
  );
};

export default Topbar;