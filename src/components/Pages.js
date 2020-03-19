import React from 'react';
import pages from '../services/pages';

const Pages = () => {
    return <div className="pages">
            <ul className="pages__list">
                {pages.map((item, index) => {
                    return (
                        <li className="pages__list--number" key={index}>
                            <span>{item.name}</span>
                        </li>
                    )
                })}
            </ul>
    </div>
}

export default Pages;