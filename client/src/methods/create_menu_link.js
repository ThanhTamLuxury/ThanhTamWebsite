
import React from 'react';
import { Route, Link } from 'react-router-dom';
import { generate_slug } from './function_lib';

// For menu items
const MenuLink = ({ label, to, activeOnlyWhenExact, itemSliders }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active + ' gla_parent'}>
                        <Link to={to}>
                            {label}
                        </Link>
                        {to === '/' ? renderItemSlider(label, itemSliders) : <ul>{renderItemSlider(label, itemSliders)}</ul>}
                    </li>
                );
            }}
        />
    );
};



// For Slider items
const SliderItemLink = ({ label, to }) => {
    return (
        <Route
            path={to}
            children={() => {
                return (
                    <li >
                        <Link to={to}>
                            {label}
                        </Link>
                    </li>
                );
            }}
        />
    );
};


// For Slider items
export const renderItemSlider = (menuLabel, itemSliders) => {
    let result = null;
    if (itemSliders != null) {
        if (itemSliders.length > 0) {
            result = itemSliders.map((item, index) => {
                return (
                    <SliderItemLink
                        key={index}
                        id={item.id}
                        label={item.name}
                        to={item.slug}
                    />
                );
            });
        }
    }

    return result;
}


// Render 
export const renderMenuLink = (items) => {
    let result = null;
    if (items != null) {
        if (items.length > 0) {
            result = items.map((item, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={item.name}
                        to={item.to}
                        activeOnlyWhenExact={item.exact}
                        itemSliders={item.itemSliders}
                    />
                );
            });
        }
    }

    return result;
}




