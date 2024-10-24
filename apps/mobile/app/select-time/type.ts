export type SelectTimeOptionType = "myTime" | "entireTime";

export type SelectModeType = "default" | "write" | "erase";

export interface SelectTimeOptionSelectProps {
  selectTimeOption: SelectTimeOptionType;
  handleSelectOption: (option: SelectTimeOptionType) => void;
}
