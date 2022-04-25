import React from "react";

import clsxm from "@/lib/helpers/clsxm";

export type SingleOptionList = {
  value: string;
  labelName: string;
};

export type UnstyledSelectProps = {
  className?: string;
  wrapperClassName?: string;
  labelName?: string;
  defaultValue?: string;
  helperText?: string;
  optionList: Array<SingleOptionList>;
} & React.ComponentPropsWithRef<"select">;

const UnstyledSelect = React.forwardRef<HTMLSelectElement, UnstyledSelectProps>(
  (
    {
      className,
      labelName,
      wrapperClassName,
      defaultValue,
      optionList,
      helperText,
      ...rest
    },
    ref
  ) => {
    if (labelName) {
      return (
        <div className={clsxm("block", wrapperClassName)}>
          <label className="text-gray-700 dark:text-gray-100">
            {labelName}
          </label>
          <select
            ref={ref}
            className={clsxm(
              "mt-1 block w-full bg-charcoal-50 dark:bg-charcoal-500",
              className
            )}
            {...rest}
          >
            {!defaultValue && (
              <option value="">--Please Choose an Option--</option>
            )}
            {optionList.map((singleOption, index) => {
              return (
                <option key={index} value={singleOption.value}>
                  {singleOption.labelName}
                </option>
              );
            })}
          </select>
          {helperText && (
            <span className="text-sm text-zinc-400">{helperText}</span>
          )}
        </div>
      );
    }
    return (
      <select
        ref={ref}
        className={clsxm("mt-1 block w-full", className)}
        {...rest}
      >
        {optionList.map((singleOption, index) => {
          return (
            <option key={index} value={singleOption.value}>
              {singleOption.labelName}
            </option>
          );
        })}
      </select>
    );
  }
);

UnstyledSelect.displayName = "UnstyledSelect";

export default UnstyledSelect;
