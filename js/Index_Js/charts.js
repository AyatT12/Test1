function rtlLabel(val) {
  return "\u202B" + val;
}
// 
var balanceOptions = {
  series: [
    { name: rtlLabel("الموظف"), data: [2000, 6000, 8000, 1000, 1200] },
    { name: rtlLabel("الفرع"), data: [4000, 10000, 12000, 6000, 200000] },
  ],
  colors: ["rgba(54,162,235,1)", "rgba(255,99,132,1)"],
  chart: {
    type: "bar",
    height: 350,
    fontFamily: "'Cairo','Arial',sans-serif",
    toolbar: { show: false }
  },
  plotOptions: {
    bar: {
      columnWidth: "55%",
      borderRadius: 5,
      borderRadiusApplication: "end",
    }
  },
  dataLabels: { enabled: false },

  xaxis: {
    categories: [
      rtlLabel("نقدًا"),
      rtlLabel("مدى"),
      rtlLabel("فيزا"),
      rtlLabel("أمريكن إكسبريس"),
      rtlLabel("ماستر كارد")
    ],
    labels: {
      formatter: rtlLabel,
      style: {
        fontFamily: "'Cairo','Arial',sans-serif",
        fontSize: "12px",
        fontWeight: 500
      }
    }
  },

  yaxis: {
    labels: {
      formatter: v => v.toLocaleString("en-EG"),
      style: {
        fontFamily: "'Cairo','Arial',sans-serif",
        fontSize: "12px"
      }
    }
  },

  legend: {
    position: "bottom",
    horizontalAlign: "center"
  },

  tooltip: {
    y: { formatter: v => v.toLocaleString("en-EG") }
  }
};

new ApexCharts(
  document.querySelector("#BalanceChart"),
  balanceOptions
).render();
// 
var contractsOptions = {
  series: [44, 55, 41, 17],
  labels: [
    rtlLabel("لاحقًا"),
    rtlLabel("غدًا"),
    rtlLabel("اليوم"),
    rtlLabel("منتهية")
  ],
  colors: [
    "rgba(54,162,235,1)",
    "#9966FF",
    "rgba(242,143,36,1)",
    "rgba(242,36,36,1)"
  ],
  chart: {
    type: "donut",
    height: 260,
    fontFamily: "'Cairo','Arial',sans-serif"
  },
  legend: {
    position: "bottom",
    horizontalAlign: "center"
  },
  dataLabels: { enabled: false }
};

new ApexCharts(
  document.querySelector("#ContractsChart"),
  contractsOptions
).render();

// 
var carsOptions = {
  series: [5, 3, 27, 2],
  labels: [
    rtlLabel("المتاحة"),
    rtlLabel("المؤجرة"),
    rtlLabel("غير المتاحة"),
    rtlLabel("المحفوظة")
  ],
  chart: {
    type: "radialBar",
    height: 350,
    fontFamily: "'Cairo','Arial',sans-serif"
  },
  plotOptions: {
    radialBar: {
      endAngle: 270,
      hollow: {
        margin: 15,
        size: "30%",
        background: "transparent",
        image: undefined,
      },
      barLabels: {
        enabled: true,
        fontSize: "12px",
        offsetX: -8,
        formatter: function (seriesName, opts) {
          return (
            rtlLabel(seriesName) +
            " : " +
            opts.w.globals.series[opts.seriesIndex]
          );
        }
      },
      dataLabels: {
  name: {
    show: false
  },
  value: {
    show: false
  },
  total: {
    show: false
  }
}

    }
  },
  colors: [
    "rgba(255,150,38,1)",
    "rgba(151,71,255,1)",
    "rgba(255,38,38,1)",
    "rgba(54,162,235,1)"
  ]
};

new ApexCharts(
  document.querySelector("#CarsChart"),
  carsOptions
).render();
