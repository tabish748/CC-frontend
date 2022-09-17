import React from 'react';

const StatsCard = (props) => {
    const text = props.text;
    const number = props.stats;

    return (
        <div className="stats-drug-card-area">
            <div className="text-area">
                <p>{text}</p>
            </div>
            <button>
                {number}
            </button>

        </div>
    );
}

export default StatsCard;
