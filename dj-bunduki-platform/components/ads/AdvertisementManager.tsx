import React from 'react';
import type { Advertisement } from '@/lib/advertisements';

interface Props {
  advertisement?: Advertisement;
}

export default function AdvertisementManager({ advertisement }: Props) {
  if (!advertisement || !advertisement.active) return null;

  if (advertisement.type === 'IMAGE') {
    return (
      <div className="my-8 overflow-hidden rounded-2xl bg-[#111]">
        {advertisement.imageUrl && (
          <img
            src={advertisement.imageUrl}
            alt={advertisement.title}
            className="w-full object-cover"
          />
        )}
      </div>
    );
  }

  return (
    <div
      className="my-8 rounded-2xl bg-[#111] p-6"
      dangerouslySetInnerHTML={{ __html: advertisement.code || '' }}
    />
  );
}
