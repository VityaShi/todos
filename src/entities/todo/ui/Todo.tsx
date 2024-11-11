import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Input } from 'antd'
import React from 'react'

interface Props {
	className?: string
}

export const Todo: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Dropdown menu={{ items: [] }}>
				<a onClick={e => e.preventDefault()}>
					<Input
						placeholder='What needs to be done?'
						prefix={<DownOutlined />}
						style={{ borderRadius: 0, width:}}
					/>
				</a>
			</Dropdown>
		</div>
	)
}
