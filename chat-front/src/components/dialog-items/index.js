import React from "react";
import DialogItem from 'components/dialog-item';
import { Empty } from "antd";

function DialogItems({ dialogs, selectedThread, onClick }) {  
  return (
    <>
      {dialogs && dialogs.length ? (
        dialogs.map((d, i) => (
          <DialogItem
            key={i}
            message={d}
            isMyLast={i % 2 === 0}
            isSelected={d.user._id === (selectedThread && selectedThread.user._id) }
            onClick={onClick}
          />
        ))
      ) : (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No dialog threads"
        />
      )}
    </>
  );
}

export default DialogItems;
