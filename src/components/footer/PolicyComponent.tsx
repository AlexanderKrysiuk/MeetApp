import { PolicySection as references } from '@components/footer/ReferenceLinks.ts';
import React from 'react';
import { NavLink } from 'react-router-dom';

const PolicyComponent = () => {
	return (
		<div className='footer__policy'>
			{references.map((item, index) => {
				return (
					<div
						className='footer__link'
						key={index}>
						<NavLink to={`${item.path}`}>{`${item.title}`}</NavLink>
					</div>
				);
			})}
		</div>
	);
};
export default PolicyComponent;