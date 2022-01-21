import React from 'react';
import { useParams } from 'react-router';
import BookCardContainer from './BookCardContainer';

function GetId() {
    const { id } = useParams();
    debugger;
    return (
        <div>
            <BookCardContainer userId={id} />
        </div>
    );
}

export default GetId;