import React from 'react'
import { Todo } from '../../../entities/todo'

interface Props {
	className?: string
}

export const Todos: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Todo></Todo>
		</div>
	)
}
