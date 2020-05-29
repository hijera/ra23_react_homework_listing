import React from 'react';
import PropTypes from 'prop-types';

Listing.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        url: PropTypes.string,
        listing_id: PropTypes.number,
        state: PropTypes.string,
        currency_code: PropTypes.string,
        quantity: PropTypes.number,
        price: PropTypes.string,
        MainImage: PropTypes.shape({
            url_570xN: PropTypes.string
        }),
    }))
};

function Listing(props) {
    const {items} = props;
    return (
        <div className={"item-list"}>
            {items.map(item => item && (item.state !== 'removed') &&
                <div key={item.listing_id} className={"item"}>
                    <div className={"item-image"}>
                        <a href={item.url}>
                            <img src={item.MainImage && item.MainImage.url_570xN}/>
                        </a>
                    </div>
                    <div className={"item-details"}>
                        <p className={"item-title"}>{(item.title.length > 50) ? item.title.substring(0, 50) + '...' : item.title}</p>
                        <p className={"item-price"}>{((item.currency_code == 'CAD' && 'C$') || (item.currency_code == 'USD' && '$') || (item.currency_code == 'EUR' && '€'))}{parseFloat(item.price).toFixed(2)}{item.currency_code == 'GBP' && ' GBP'}</p>
                        <p className={`item-quantity level-${(item.quantity <= 10 && 'low') || (item.quantity <= 20 && 'medium') || 'high'}`}>{item.quantity}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

Listing.defaultProps = {
    items: []
};
export default Listing;