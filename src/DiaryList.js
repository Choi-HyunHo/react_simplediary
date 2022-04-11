import React, { useContext } from 'react';
import { DiaryStateContext } from './App';
import DiaryItem from './DiaryItem';

const DiaryList = () => {
  const { data } = useContext(DiaryStateContext);

  return (
    <div className="DiaryList_container">
      <h2>일기 리스트</h2>
      <h4>{data.length}개의 일기가 있습니다.</h4>
      <div>
        {data.map((it, idx) => (
          <DiaryItem key={`diaryitem_${it.id}`} {...it} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
