import React from 'react';
import { useAtomValue } from 'jotai';
import { messageAtom } from 'src/atoms/gameAtoms.ts';

const Message: React.FC = () => {
  const content = useAtomValue(messageAtom)

  return content ? (
    <div className="my-2 border-2 border-blue-500 p-4 text-center">
        {content}
    </div>
  ) : null;
};

export default Message;
