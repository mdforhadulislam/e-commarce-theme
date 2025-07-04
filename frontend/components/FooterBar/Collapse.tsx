'use client';

import { Disclosure } from '@headlessui/react';
import { Plus } from 'lucide-react';
import React from 'react';

const Collapse = ({ title, children }: { title: string; children: React.ReactNode }) => {
  return (
    <div className="w-full border-t border-gray-300 hover text-white">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex group justify-between w-full pt-4 text-sm font-medium text-left outline-none focus:outline-none">
              <span className="text-xl transition-colors duration-300 text-white">
                {title}
              </span>
              <Plus
                className={`${
                  open ? 'transform rotate-45' : ''
                } text-3xl md:text-4xl transition duration-300 group-hover:text-primary`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="pt-2 pb-4 lg:text-lg text-white">
              {children}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Collapse;