import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Dropdown, Modal } from 'antd';
import { DownOutlined, CrownOutlined, HistoryOutlined, LineChartOutlined, HeartOutlined, BarChartOutlined, FundOutlined, TeamOutlined } from '@ant-design/icons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDonateModalVisible, setIsDonateModalVisible] = useState(false);

  // 定义活动链接的类名函数
  const getNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return isActive 
      ? "text-blue-600 border-b-2 border-blue-600 hover:text-blue-700 px-3 py-2 text-sm font-medium"
      : "text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium";
  };

  // PRO功能菜单项
  const proMenuItems = [
    {
      key: 'pro-analysis',
      label: (
        <Link to="/pro-analysis" className="flex items-center py-2 px-4 hover:bg-gray-50">
          <HistoryOutlined className="mr-3 text-yellow-500 text-xl" />
          <div>
            <div className="font-medium">历史规律</div>
            <div className="text-xs text-gray-500">基于历史数据的深度分析</div>
          </div>
        </Link>
      ),
    },
    {
      key: 'news-analysis',
      label: (
        <Link to="/news-analysis" className="flex items-center py-2 px-4 hover:bg-gray-50">
          <LineChartOutlined className="mr-3 text-yellow-500 text-xl" />
          <div>
            <div className="font-medium">消息面分析</div>
            <div className="text-xs text-gray-500">从宏观、行业等角度分析消息面</div>
          </div>
        </Link>
      ),
    },
    {
      key: 'agents',
      label: (
        <Link to="/agents" className="flex items-center py-2 px-4 hover:bg-gray-50">
          <TeamOutlined className="mr-3 text-yellow-500 text-xl" />
          <div>
            <div className="font-medium">多智能体分析</div>
            <div className="text-xs text-gray-500">金融专家智能体组合分析策略</div>
          </div>
        </Link>
      ),
    }
  ];

  // 研究报告子菜单项
  const researchMenuItems = [
    {
      key: 'strategy-advice',
      label: (
        <Link to="/research/strategy-advice" className="flex items-center py-2 px-4 hover:bg-gray-50">
          <BarChartOutlined className="mr-3 text-blue-500 text-xl" />
          <div>
            <div className="font-medium">交易策略建议</div>
            <div className="text-xs text-gray-500">基于市场数据的交易策略分析和建议</div>
          </div>
        </Link>
      ),
    },
    {
      key: 'core-factor',
      label: (
        <Link to="/research/core-factor" className="flex items-center py-2 px-4 hover:bg-gray-50">
          <LineChartOutlined className="mr-3 text-green-500 text-xl" />
          <div>
            <div className="font-medium">核心驱动因子分析</div>
            <div className="text-xs text-gray-500">豆粕市场核心驱动因子的深度分析</div>
          </div>
        </Link>
      ),
    },
    {
      key: 'options-strategy',
      label: (
        <Link to="/research/options-strategy" className="flex items-center py-2 px-4 hover:bg-gray-50">
          <FundOutlined className="mr-3 text-purple-500 text-xl" />
          <div>
            <div className="font-medium">基本面分析</div>
            <div className="text-xs text-gray-500">基于基本面的豆粕策略分析</div>
          </div>
        </Link>
      ),
    }
  ];

  // 显示捐助弹窗
  const showDonateModal = () => {
    setIsDonateModalVisible(true);
  };

  // 关闭捐助弹窗
  const handleDonateModalClose = () => {
    setIsDonateModalVisible(false);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-12 w-auto mr-3" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">豆粕组合策略</span>
                <span className="text-sm text-gray-500">豆粕ETF、期货、期权及相关股票</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/trading" className={getNavLinkClass}>
              交易策略
            </NavLink>
            <Dropdown 
              menu={{ items: researchMenuItems }} 
              placement="bottomRight"
              overlayClassName="research-dropdown"
              trigger={['hover']}
            >
              <a className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                研究报告
              </a>
            </Dropdown>
            <Dropdown 
              menu={{ items: proMenuItems }} 
              placement="bottomRight"
              overlayClassName="pro-dropdown"
              trigger={['hover']}
            >
              <a className="relative inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                <span className="relative">
                  专业版
                  <span className="absolute -top-3 -right-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md transform rotate-12">
                    PRO
                  </span>
                </span>
              </a>
            </Dropdown>
            <a 
              onClick={showDonateModal}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 rounded-md shadow-sm cursor-pointer"
            >
              <HeartOutlined className="mr-1" />
              <span className="font-bold">赞赏</span>
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">打开主菜单</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink
            to="/trading"
            className={getNavLinkClass}
            onClick={() => setIsMenuOpen(false)}
          >
            交易策略
          </NavLink>
          <div className="px-3 py-2">
            <div className="text-gray-700 font-medium">研究报告</div>
            <div className="mt-2 space-y-1">
              <NavLink
                to="/research/strategy-advice"
                className="flex items-center py-2 px-4 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <BarChartOutlined className="mr-3 text-blue-500 text-xl" />
                <div>
                  <div className="font-medium">交易策略建议</div>
                  <div className="text-xs text-gray-500">基于市场数据的交易策略分析和建议</div>
                </div>
              </NavLink>
              <NavLink
                to="/research/core-factor"
                className="flex items-center py-2 px-4 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <LineChartOutlined className="mr-3 text-green-500 text-xl" />
                <div>
                  <div className="font-medium">核心驱动因子分析</div>
                  <div className="text-xs text-gray-500">豆粕市场核心驱动因子的深度分析</div>
                </div>
              </NavLink>
              <NavLink
                to="/research/options-strategy"
                className="flex items-center py-2 px-4 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <FundOutlined className="mr-3 text-purple-500 text-xl" />
                <div>
                  <div className="font-medium">基本面分析</div>
                  <div className="text-xs text-gray-500">基于基本面的豆粕策略分析</div>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="px-3 py-2">
            <div className="relative inline-block">
              <span className="text-gray-700 font-medium">专业版</span>
              <span className="absolute -top-3 -right-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md transform rotate-12">
                PRO
              </span>
            </div>
            <div className="mt-2 space-y-1">
              <NavLink
                to="/pro-analysis"
                className="flex items-center py-2 px-4 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <HistoryOutlined className="mr-3 text-yellow-500 text-xl" />
                <div>
                  <div className="font-medium">历史规律</div>
                  <div className="text-xs text-gray-500">基于历史数据的深度分析</div>
                </div>
              </NavLink>
              <NavLink
                to="/news-analysis"
                className="flex items-center py-2 px-4 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <LineChartOutlined className="mr-3 text-yellow-500 text-xl" />
                <div>
                  <div className="font-medium">消息面分析</div>
                  <div className="text-xs text-gray-500">从宏观、行业等角度分析消息面</div>
                </div>
              </NavLink>
              <NavLink
                to="/agents"
                className="flex items-center py-2 px-4 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <TeamOutlined className="mr-3 text-yellow-500 text-xl" />
                <div>
                  <div className="font-medium">多智能体分析</div>
                  <div className="text-xs text-gray-500">金融专家智能体组合分析策略</div>
                </div>
              </NavLink>
            </div>
          </div>
          <div 
            className="flex items-center py-2 px-4 hover:bg-gray-50 rounded-md cursor-pointer bg-gradient-to-r from-red-50 to-pink-50"
            onClick={() => {
              setIsMenuOpen(false);
              showDonateModal();
            }}
          >
            <HeartOutlined className="mr-3 text-red-500" />
            <div>
              <div className="font-bold text-red-600">赞赏</div>
              <div className="text-xs text-gray-500">支持我们的发展</div>
            </div>
          </div>
        </div>
      </div>

      {/* 捐助弹窗 */}
      <Modal
        title="支持我们"
        open={isDonateModalVisible}
        onCancel={handleDonateModalClose}
        footer={null}
        centered
      >
        <div className="text-center">
          <p className="mb-4">感谢您对我们的支持！您的捐助将帮助我们持续改进产品和服务。</p>
          <p className="mb-4 text-gray-500">扫描下方二维码进行自愿捐助：</p>
          <div className="flex justify-center mb-4">
            <img src="/donate.jpg" alt="捐助二维码" className="max-w-xs" />
          </div>
          <p className="text-sm text-gray-500">您的每一份支持都是我们前进的动力！</p>
        </div>
      </Modal>
    </header>
  );
};

export default Header; 