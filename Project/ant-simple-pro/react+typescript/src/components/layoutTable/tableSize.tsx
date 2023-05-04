import React, { memo } from 'react'
import { ColumnHeightOutlined } from '@ant-design/icons';
import { Tooltip, Dropdown, Menu } from 'antd'
import { MenuInfo } from 'rc-menu/lib/interface';

const TableSize: React.FC<{ tableSize: Function; className?: string }> = memo(function TableSize({ tableSize, className }) {
  const handleClick = (e: MenuInfo) => tableSize(e.key);

  const menu = (
    <Menu onClick={handleClick} selectable defaultSelectedKeys={['middle']}>
      <Menu.Item key='middle'>默认</Menu.Item>
      <Menu.Item key='large'>松散</Menu.Item>
      <Menu.Item key='small'>紧凑</Menu.Item>
    </Menu>
  );

  return (
    <>
      <Tooltip title='密度' placement="left">
        <Dropdown overlay={menu} placement="bottomCenter">
          <ColumnHeightOutlined className={className} />
        </Dropdown>
      </Tooltip>
    </>
  )
})
export default TableSize
