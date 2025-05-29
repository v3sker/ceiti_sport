import * as XLSX from "xlsx";
import { format } from "date-fns";

export async function exportXlsx(data, t) {
  try {
    const HEADERS = [
      "ID",
      "Name",
      "Surname",
      "Gender",
      "Birthdate",
      "Height",
      "Weight",
      "Sport"
    ]

    const GENDERS_MAP = {
      "M": t('genderMap.male'),
      "F": t('genderMap.female')
    };

    const SPORTS_MAP = {
      "FOOTBALL": t('sportsMap.football'),
      "BASKETBALL": t('sportsMap.basketball'),
      "TENNIS": t('sportsMap.tennis'),
      "GYMNASTICS": t('sportsMap.gymnastics'),
      "SWIMMING": t('sportsMap.swimming'),
    }

    let xlsxData = [];

    data.map(item => {
      xlsxData.push({
        'ID': item.id,
        "Name": item.name,
        "Surname": item.surname,
        "Gender": GENDERS_MAP[item.gender],
        "Birthdate": format(item.birthdate, 'dd.MM.yyyy'),
        "Height": item.height,
        "Weight": item.weight,
        "Sport": SPORTS_MAP[item.sport.name]
      })
    })

    const rows = [HEADERS, ...xlsxData.map(item => HEADERS.map(header => item[header]))];

    const worksheet = XLSX.utils.aoa_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });
    const url = URL.createObjectURL(blob);

    return { success: true, url }
  } catch (err) {
    console.error(err.message);
    return { error: err.message }
  }
}