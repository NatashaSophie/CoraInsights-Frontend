import React, { useState } from 'react';

import Image from 'next/image';
import { useSelector } from 'react-redux';

import { UploadMutation, useUploadMutation } from '@/graphql/generated/graphql';
import { userSelector } from '@/store/user/selectors';

import Loading from '../Loading';

type UserAvatarProps = {
  onUploadNewAvatar?: (uploadData: UploadMutation) => void;
};

const UserAvatar: React.FC<UserAvatarProps> = ({ onUploadNewAvatar }) => {
  const [uploadedAvatarUrl, setUploadedAvatarUrl] = useState<string | null>(
    null
  );
  const uploadMutation = useUploadMutation({
    onSuccess: ({ upload }) => {
      if (onUploadNewAvatar) {
        setUploadedAvatarUrl(upload.url);
        onUploadNewAvatar({ upload });
      }
    },
  });

  const user = useSelector(userSelector);

  return user ? (
    <div className="w-[120px] h-[120px] relative rounded-full">
      {onUploadNewAvatar && (
        <div className="w-full h-full absolute">
          <label
            htmlFor="avatar-upload"
            className="absolute h-full w-full z-10 rounded-full"
          />
          <input
            type="file"
            id="avatar-upload"
            name="avatar-upload"
            className="hidden"
            onChange={(e) => {
              if (e.target.files?.length) {
                const file = e.target.files[0];
                if (file) {
                  uploadMutation.mutate({ file });
                }
              }
            }}
            accept="image/png, image/jpeg"
          />
        </div>
      )}
      <div className="flex items-center justify-center bg-white overflow-hidden border-primary border-2 text-black rounded-full w-full h-full">
        {uploadedAvatarUrl || user.avatar ? (
          <Loading
            isLoading={uploadMutation.isLoading}
            className="text-primary h-full"
          >
            <Image
              alt="Avatar"
              src={uploadedAvatarUrl || user.avatar?.url || ''}
              width={120}
              height={120}
              className="w-full h-full object-cover"
            />
          </Loading>
        ) : (
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.6667 26.6667L20 20L13.3334 26.6667"
              stroke="#F06E0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 20V35"
              stroke="#F06E0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M33.9833 30.6498C35.6088 29.7636 36.893 28.3613 37.6331 26.6642C38.3731 24.9671 38.527 23.0719 38.0703 21.2776C37.6136 19.4834 36.5724 17.8923 35.111 16.7556C33.6497 15.6188 31.8514 15.001 29.9999 14.9998H27.8999C27.3955 13.0485 26.4552 11.237 25.1498 9.70147C23.8445 8.1659 22.208 6.94623 20.3634 6.13416C18.5189 5.32208 16.5142 4.93874 14.5001 5.01295C12.4861 5.08715 10.515 5.61698 8.73523 6.56259C6.95541 7.5082 5.41312 8.84498 4.2243 10.4724C3.03549 12.0999 2.23108 13.9757 1.87157 15.9588C1.51205 17.9419 1.60678 19.9807 2.14862 21.9219C2.69047 23.8631 3.66534 25.6563 4.99993 27.1665"
              stroke="#F06E0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.6667 26.6667L20 20L13.3334 26.6667"
              stroke="#F06E0B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    </div>
  ) : null;
};

export default UserAvatar;
