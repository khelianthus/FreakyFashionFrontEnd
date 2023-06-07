"use client";
import React, { useRef } from 'react';
import LikeButton from './LikeButton';
import NewBadge from './NewBadge';
import Link from 'next/link';

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
                    <div className="aspect-h-6 aspect-w-4 relative overflow-hidden bg-gray-100 ">
                    <Link href={`details/${result.id}`}>
                          <img 
                          src={result.imageUrl}
                          alt={result.name}
                          className="h-full w-full object-cover object-center"
                          loading="lazy"
                          />
                        {isYoungerThanOneMonth && <NewBadge />}
                      </Link>
                      <div>
                        <div className="absolute bottom-2 right-2 w-5">
                          <LikeButton/>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-between'> 
                    <Link href={`/details/${result.id}`}>
                    <h3 className="mt-4 text-medium font-medium text-gray-900">{result.color} {result.name}</h3>
                    </Link>
                    <p className="mt-4 font-bold text-gray-900">{result.price} SEK</p>
                    </div>
                    <p className="italic text-gray-500 text-xs">{result.brand}</p>
                </div>
    )
    return content
}
