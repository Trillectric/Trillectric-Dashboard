<template>
  <div class="scrollable-table">
    <div class="scrollable-container">
      <table>
        <thead>
          <tr>
            <th v-for="(col, index) in columns" :key="index">{{ col.label }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id" @click="redirectToDynamic">
            <td v-for="(col, index) in columns" :key="index">
              <span v-if="col.field === 'col3'" :class="getAlertStyle(item[col.field])">
                {{ item[col.field] }}
              </span>
              <span v-else-if="col.field === 'col8'" :class="getStatusStyle(item[col.field])">
                {{ item[col.field] }}
              </span>
              <span v-else>{{ item[col.field] }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  data() {
    return {
      columns: [
        { label: "Name", field: "col1" },
        { label: "Peak Power (KWP)", field: "col2" },
        { label: "Highest Alert Impact", field: "col3" },
        { label: "Address", field: "col4" },
        { label: "Energy Today (KWH)", field: "col5" },
        { label: "Energy Yesterday (KWH)", field: "col6" },
        { label: "Specific Yield (last 7 days)", field: "col7" },
        { label: "Activation Status", field: "col8" },
        { label: "Note", field: "col9" },
      ],
      items: [
        {
          id: 1,
          col1: "John Doe",
          col2: "12.5",
          col3: "3",
          col4: "123 Green Street, NY",
          col5: "23.4",
          col6: "22.1",
          col7: "7.5",
          col8: "Active",
          col9: "Routine maintenance required",
        },
        {
          id: 2,
          col1: "Jane Smith",
          col2: "15.8",
          col3: "5",
          col4: "456 Blue Avenue, CA",
          col5: "30.2",
          col6: "29.5",
          col7: "9.1",
          col8: "Inactive",
          col9: "Battery replacement needed",
        },
        {
          id: 3,
          col1: "Solar One",
          col2: "10.0",
          col3: "3",
          col4: "789 Solar Way, TX",
          col5: "18.7",
          col6: "17.9",
          col7: "6.0",
          col8: "Active",
          col9: "No issues reported",
        },
        {
          id: 4,
          col1: "Solar One",
          col2: "10.0",
          col3: "1",
          col4: "789 Solar Way, TX",
          col5: "18.7",
          col6: "17.9",
          col7: "6.0",
          col8: "Inactive",
          col9: "No issues reported",
        },
        {
          id: 5,
          col1: "Solar One",
          col2: "10.0",
          col3: "8",
          col4: "789 Solar Way, TX",
          col5: "18.7",
          col6: "17.9",
          col7: "6.0",
          col8: "Pending",
          col9: "No issues reported",
        },
      ],
    };
  },
  methods: {
    redirectToDynamic(rowId) {
      this.$router.push({ name: 'DynamicComponent', });
    },
    getAlertStyle(value) {
      const colors = ["alert-color1", "alert-color2", "alert-color3", "alert-color4"];
      return colors[(value - 1) % colors.length];
    },
    getStatusStyle(status) {
      switch (status) {
        case "Active":
          return "status-active";
        case "Inactive":
          return "status-inactive";
        case "Pending":
          return "status-pending";
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped>
.alert-color1 {
  background: #FFE8A5;
  border-radius: 50%;
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}

.alert-color2 {
  background: #FFA63E;
  border-radius: 50%;
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}

.alert-color3 {
  background: #FF8985;
  border-radius: 50%;
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height:30px;
  text-align: center;
}

.alert-color4 {
  background: #13B78C;
  border-radius: 50%;
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}

.scrollable-table {
  max-height: 400px;
  overflow-y: auto;
  padding: 20px;
  background: #fff;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
}

.scrollable-table table {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
}

.scrollable-container {
  overflow-x: auto;
  display: block;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  font-size: 14px;
  font-weight: 400;
  padding: 8px;
  text-align: center;
}

td {
  font-weight: 600;
  cursor: pointer;
}

th {
  background-color: #f5f4ff;
  padding: 15px;
}

tr {
  border-bottom: 0.2px solid #eeeeee;
}

th, td {
  min-width: 150px;
}

.status {
  padding: 8px 16px;
  border-radius: 20px;
  text-align: center;
  display: inline-block;
  font-weight: bold;
  font-size: 12px;
  min-width: 100px;
}

.status-active {
  color: #13B78C;
  background-color: #E4F9F4;
  border-radius: 18px;
  padding: 5px 20px;
}

.status-inactive {
  color: #EFAB1C;
  background-color: #F9F1DF;
  border-radius: 18px;
  padding: 5px 20px;
}

.status-pending {
  color: #DD422E;
  background-color: #FFE2E1;
  border-radius: 18px;
  padding: 5px 20px;
}
</style>
