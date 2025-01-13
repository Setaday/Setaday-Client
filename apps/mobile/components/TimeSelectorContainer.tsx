import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { SelectModeType } from "../app/select-time/type";

interface TimeSelectorProps {
  date: Date;
  onChange?: (newTimes: boolean[], date: Date) => void;
  selectMode: SelectModeType;
}

interface TimeSelectorContainerProps {
  selectMode: SelectModeType;
}

const TimeSelector = ({ date, onChange, selectMode }: TimeSelectorProps) => {
  const [selectedTimes, setSelectedTimes] = useState<boolean[]>(new Array(48).fill(false));
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const timeSlotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const setTimeSlotRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      timeSlotRefs.current[index] = el;
    },
    []
  );

  const findTimeSlotIndex = useCallback((touch: Touch) => {
    const { clientX, clientY } = touch;

    return timeSlotRefs.current.findIndex((ref) => {
      if (!ref) return false;
      const rect = ref.getBoundingClientRect();
      return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
    });
  }, []);

  // 터치 이벤트 처리를 위한 핸들러들
  const preventScroll = useCallback(
    (e: TouchEvent) => {
      if (isDragging) {
        e.preventDefault();
      }
    },
    [isDragging]
  );

  const handleTouchStart = (event: React.TouchEvent, index: number) => {
    if (selectMode === "default") return;

    event.preventDefault();
    event.stopPropagation();

    setIsDragging(true);
    setDragStart(index);

    const newSelectedTimes = [...selectedTimes];
    newSelectedTimes[index] = selectMode === "write";
    setSelectedTimes(newSelectedTimes);
    onChange?.(newSelectedTimes, date);
  };

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      if (!isDragging || selectMode === "default") return;

      event.preventDefault();
      event.stopPropagation();

      const touch = event.touches?.[0];
      if (!touch) return;

      const currentIndex = findTimeSlotIndex(touch);

      if (currentIndex !== -1 && dragStart !== null) {
        const newSelectedTimes = [...selectedTimes];
        const start = Math.min(dragStart, currentIndex);
        const end = Math.max(dragStart, currentIndex);

        for (let i = start; i <= end; i++) {
          newSelectedTimes[i] = selectMode === "write";
        }

        setSelectedTimes(newSelectedTimes);
        onChange?.(newSelectedTimes, date);
      }
    },
    [isDragging, selectMode, dragStart, selectedTimes, findTimeSlotIndex, onChange, date]
  );

  const handleTouchEnd = useCallback(
    (event: TouchEvent) => {
      if (isDragging) {
        event.preventDefault();
        event.stopPropagation();
      }
      setIsDragging(false);
      setDragStart(null);
    },
    [isDragging]
  );

  // 컴포넌트가 마운트될 때 이벤트 리스너 설정
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // passive: false로 설정하여 preventDefault가 동작하도록 함
    container.addEventListener("touchstart", preventScroll, { passive: false });
    container.addEventListener("touchmove", preventScroll, { passive: false });

    if (isDragging) {
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd, { passive: false });
    }

    return () => {
      container.removeEventListener("touchstart", preventScroll);
      container.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, handleTouchMove, handleTouchEnd, preventScroll]);

  return (
    <div ref={containerRef} className="touch-none rounded-lg bg-white shadow">
      <div className="flex flex-col">
        {selectedTimes.map((selected, index) => (
          <div
            key={`time-${date.toISOString()}-${index}`}
            ref={setTimeSlotRef(index)}
            className={`h-[3rem] w-[4.7rem] border-b last:border-b-0 ${
              selectMode !== "default" ? "cursor-pointer" : "cursor-default"
            } flex touch-none select-none items-center px-2 text-sm transition-colors duration-150 ${
              selected ? "bg-blue-500" : ""
            }`}
            onTouchStart={(e) => handleTouchStart(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

const TimeSelectorContainer = ({ selectMode }: TimeSelectorContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dates] = useState([new Date(2024, 9, 29), new Date(2024, 9, 30), new Date(2024, 9, 31)]);

  const [allSelectedTimes, setAllSelectedTimes] = useState<Record<string, boolean[]>>(
    dates.reduce(
      (acc, date) =>
        Object.assign(acc, {
          [date.toISOString()]: new Array(48).fill(false),
        }),
      {}
    )
  );

  const handleTimeChange = (newTimes: boolean[], date: Date) => {
    setAllSelectedTimes((prev) => ({
      ...prev,
      [date.toISOString()]: newTimes,
    }));
  };

  // 컨테이너의 스크롤도 방지
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const preventScroll = (e: TouchEvent) => {
      if (e.target && (e.target as HTMLElement).closest(".rounded-lg")) {
        e.preventDefault();
      }
    };

    container.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      container.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex touch-none pl-4">
      {dates.map((date) => (
        <div key={date.toISOString()} className="flex flex-col">
          <div className="flex flex-col items-center gap-2 mb-[1.1rem]">
            <span className="text-gray-5 font-body1_b_18">4</span>
            <span className="text-gray-2 font-body6_m_12">MON</span>
          </div>
          <TimeSelector date={date} onChange={handleTimeChange} selectMode={selectMode} />
        </div>
      ))}
    </div>
  );
};

export default TimeSelectorContainer;
