function SelectTimeRange({
  handleSelectTime,
}: {
  handleSelectTime: (isSelected: boolean) => void;
}) {
  return (
    <button type="submit" onClick={() => handleSelectTime(true)}>
      hi
    </button>
  );
}

export default SelectTimeRange;
