import React from 'react';
import { useParams } from 'react-router';
import BookCardWithHooks from './BookCardWithHooks';

function GetId() {
    const { id } = useParams();
    return (
        <div>
            <BookCardWithHooks userId={id} />
        </div>
    );
}

export default GetId;