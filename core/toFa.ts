const toFa = (enText: string | number) => {
  const enToFaNumberMap: Record<string, string> = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };

  return enText !== undefined && enText !== null
    ? enText
        .toString()
        .split("")
        .map(enChar => enToFaNumberMap[enChar] || enChar)
        .join("")
    : "";
};
export default toFa;
