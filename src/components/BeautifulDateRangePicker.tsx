'use client'

import DateRangePicker from '@/app/components/Common/DateRangePicker';

interface BeautifulDateRangePickerProps {
  onDateChange?: (startDate: string, endDate: string) => void;
}

/**
 * Beautiful Date Range Picker - Colorful Variant
 * Wrapped version of DateRangePicker with colorful styling
 */
const BeautifulDateRangePicker: React.FC<BeautifulDateRangePickerProps> = ({
  onDateChange,
}) => {
  return (
    <DateRangePicker
      onDateChange={onDateChange}
      variant="colorful"
      label="Select Date Range"
    />
  );
};

export default BeautifulDateRangePicker;
