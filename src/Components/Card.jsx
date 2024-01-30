import React, { useState } from 'react';
import Modal from "./Model";

const Card = ({ book }) => {
    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState(null);

    return (
        <>
            {book.map((item) => {
                const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                const amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

                if (thumbnail !== undefined && amount !== undefined) {
                    return (
                        <div className="card" key={item.id} onClick={() => { setShow(true); setItem(item) }}>
                            <img src={thumbnail} alt="" />
                            <div className="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <p className="amount">&#8377;{amount}</p>
                            </div>
                            <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
                        </div>
                    );
                }

                return null; // Return null for items where either thumbnail or amount is undefined
            })}
        </>
    );
};

export default Card;
