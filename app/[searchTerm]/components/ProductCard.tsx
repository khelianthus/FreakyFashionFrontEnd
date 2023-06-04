"use client";
//Behöver använda use client för att LikeButton ska fungera, får ej vara server-renderad. LikeButton har useState.
import React, { useRef } from 'react';
import LikeButton from './LikeButton';

type Props = {
    result: Product;
}

export default function ProductCard({ result }: Props) {

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
            {/* Nedan är för nyhetsknappen */}
          {/* <div className="absolute top-2 left-2">
            <span
              className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-500/10">Nyhet</span>
          </div> */}
          <div>
            <div className="absolute bottom-2 right-2 w-5">
              <LikeButton/>
            </div>
          </div>
        </div>
        <h3 className="mt-4 font-medium text-gray-900">{result.name}</h3>
        <p className="italic text-gray-500 text-xs">{result.brand}</p>
        <p className="italic text-gray-500 text-xs">{result.color}</p>
        <p className="mt-2 font-medium text-gray-900">{result.price} SEK</p>
      </div>
    )

    return content
}
