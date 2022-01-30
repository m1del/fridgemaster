import xlrd as xlrd

workbook = xlrd.open_workbook('FoodKeeper-Data.xls')
worksheet = workbook.sheet_by_name('Product')
row_count = worksheet.nrows
col_count = worksheet.ncols

keywords = [] #contains the list of foods' keywords
food_indexes = [] #contains the indexes of foods with a certain keyword
key = input("Search for a food: ")
for cur_row in range(0, row_count):
    cell = worksheet.cell(cur_row, 4)
    cur_str = str(cell).lower()
    keywords.append(cur_str)
    if cur_str.find(key) > -1 :
        food_indexes.append(cur_row)

print("Possible food options:")
i = 1
for x in food_indexes:
    print(str(i) + ". " + worksheet.cell(x, 2).value + ": " + worksheet.cell(x, 3).value)
    i += 1
