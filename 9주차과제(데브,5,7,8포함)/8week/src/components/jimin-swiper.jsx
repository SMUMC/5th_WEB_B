import { useRef, useState } from 'react';

const useDrag = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = startX - e.pageX;
    containerRef.current.scrollLeft += deltaX;
    setStartX(e.pageX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDragStart = (e) => {
    e.preventDefault();
  };

  return {
    containerRef,
    isDragging,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleDragStart,
  };
};

export default useDrag;