"use client";
//Behöver använda use client för att LikeButton ska fungera, får ej vara server-renderad. LikeButton har useState.
import React, { useRef } from 'react';
import LikeButton from './LikeButton';
import NewBadge from './NewBadge';

type Props = {
    result: Product;
}

export default function ProductCard({ result }: Props) {
  const currentDate = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(currentDate.getMonth() - 1);

  const createdAtDate = new Date(result.createdat);

  const isYoungerThanOneMonth = createdAtDate > oneMonthAgo;


    const content = (
            <div className="group text-sm">
                    <div className="aspect-h-6 aspect-w-4 relative overflow-hidden rounded-lg bg-gray-100 ">
                      <a href="https://google.com">
                        <img 
                          src={result.imageUrl}
                          alt={result.name}
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                          />
                        </a>
                        {/* Om produkten är createdAt för mindre än en månad sedan skriver vi ut newbadge, annars inget */}
                        {isYoungerThanOneMonth && <NewBadge />}
                      <div>
                        <div className="absolute bottom-2 right-2 w-5">
                          <LikeButton/>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-between'> 
                    <h3 className="mt-4 text-base text-gray-900">{result.color} {result.name}</h3>
                    <p className="mt-4 font-medium text-gray-900">{result.price} SEK</p>
                    </div>
                    <p className="italic text-gray-500 text-xs">{result.brand}</p>
                </div>
    )

    return content
}
