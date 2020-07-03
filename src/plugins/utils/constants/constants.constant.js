const CONSTANTS = {
  DATATABLE: {
    PAGE_SIZES: [25, 50, 75, 100],
    PAGE_SIZE: 25
  },
  ENUM: {
    MEMBER_TITLE: ["Mr.", "Mrs.", "Ms.", "Miss"],
    TIER_QUALIFICATION_STATUS: [
      {
        name: "Active",
        value: "active"
      },
      {
        name: "Draft",
        value: "draft"
      },
      {
        name: "Inactive",
        value: "inactive"
      }
    ]
  },
  FILTERS: {
    STATUS: [
      {
        name: "Inactive",
        value: 0
      },
      {
        name: "Active",
        value: 1
      }
    ]
  },
  RULES: {
    TEASER: [
      {
        name: "Yes",
        type: "success",
        value: 1
      },
      {
        name: "No",
        type: "error",
        value: 0
      }
    ],
    STATUS: [
      {
        name: "Inactive",
        type: "error",
        value: 0
      },
      {
        name: "Active",
        type: "success",
        value: 1
      }
    ],
    STATUS_OPEN: [
      {
        name: "Open",
        type: "success",
        value: "Open"
      },
      {
        name: "Close",
        type: "error",
        value: "Close"
      },
      {
        name: "Reinstated",
        type: "info",
        value: "Reinstated"
      }
    ],
    STATUS_TRANSACTION_FNB: [
      {
        name: "Transaction",
        type: "success",
        value: "TRX"
      },
      {
        name: "Cancelled",
        type: "error",
        value: "CANCELLED"
      },
      {
        name: "Reverse",
        type: "info",
        value: "REVERSE"
      },
      {
        name: "Reinstatement",
        type: "info",
        value: "REINSTATEMENT"
      }
    ],
    STATUS_RESERVATION: [
      {
        name: "Room Sharer",
        type: "info",
        value: "RoomSharer"
      },
      {
        name: "No Show",
        type: "info",
        value: "NoShow"
      },
      {
        name: "Cancelled",
        type: "info",
        value: "Cancelled"
      },
      {
        name: "Checked Out",
        type: "info",
        value: "CheckedOut"
      },
      {
        name: "In House",
        type: "info",
        value: "InHouse"
      },
      {
        name: "Verbal Confirm",
        type: "info",
        value: "VerbalConfirm"
      },
      {
        name: "Wait List",
        type: "info",
        value: "WaitList"
      },
      {
        name: "Tentative",
        type: "info",
        value: "Tentative"
      },
      {
        name: "6 PM",
        type: "info",
        value: "6PM"
      },
      {
        name: "Guaranteed",
        type: "info",
        value: "Guaranteed"
      }
    ],
    SOURCE: [
      {
        name: "Raptor",
        type: "success",
        value: "Raptor"
      },
      {
        name: "VHP",
        type: "success",
        value: "VHP"
      }
    ],
    VERIFIED: [
      {
        name: "Unverified",
        type: "error",
        value: 0
      },
      {
        name: "Verified",
        type: "success",
        value: 1
      }
    ],
    POINT: [
      {
        name: "False",
        type: "error",
        value: 0
      },
      {
        name: "True",
        type: "success",
        value: 1
      }
    ],
    POS: [
      {
        name: "Raptor",
        type: "info",
        value: "Raptor"
      },
      {
        name: "VHP",
        type: "info",
        value: "VHP"
      }
    ],
    HOTEL_CHALLENGE: [
      {
        name: "Spending",
        type: "info",
        value: "SPENDING"
      },
      {
        name: "Night",
        type: "info",
        value: "NIGHT"
      }
    ],
    OUTLET_CHALLENGE: [
      {
        name: "Spending",
        type: "info",
        value: "SPENDING"
      },
      {
        name: "Visit",
        type: "info",
        value: "VISIT"
      }
    ],
    TAG: [
      {
        name: "VIP Visitor",
        type: "info",
        value: 1
      },
      {
        name: "EO GROUP",
        type: "info",
        value: 2
      },
      {
        name: "Loyal Customer",
        type: "info",
        value: 3
      }
    ],
    VOUCHER: [
      {
        name: "PLU Voucher",
        type: "info",
        value: "PLU_VOUCHER"
      },
      {
        name: "IDR Voucher",
        type: "info",
        value: "IDR_VOUCHER"
      }
    ],
    TYPE_TRANSACTION: [
      {
        name: "Transaction F&B",
        value: "TRX_FNB"
      },
      {
        name: "Transaction F&B Cancelled",
        value: "TRX_FNB_CANCELLED"
      },
      {
        name: "Transaction Hotel",
        value: "TRX_HOTEL"
      },
      {
        name: "Transaction Hotel Cancelled",
        value: "TRX_HOTEL_CANCELLED"
      },
      {
        name: "Sign Up Bonus Point",
        value: "SIGN_UP_POINT"
      },
      {
        name: "Graduation Bonus Point",
        value: "GRAD_POINT"
      },
      {
        name: "Win Challenge Outlet",
        value: "CHALL_OUTLET"
      },
      {
        name: "Win Challenge Hotel",
        value: "CHALL_HOTEL"
      },
      {
        name: "Redemption Voucher Burned",
        value: "REDEMPTION_VOUCHER"
      },
      {
        name: "Redemption Voucher Burned",
        value: "REDEMPTION_BURNED"
      },
      {
        name: "Redemption Voucher Unburned",
        value: "REDEMPTION_UNBURNED"
      },
      {
        name: "Add Deduct Point",
        value: "ADD_DEDUCT"
      },
      {
        name: "Expired Point",
        value: "EXPIRED"
      },
      {
        name: "Tier Multiplier Bonus Point",
        value: "TIER_MULTIPLIER"
      },
      {
        name: "Tier Multiplier Bonus Point Cancelled",
        value: "TIER_MULTIPLIER_CANCELLED"
      }
    ],
    RESERVE_BALANCE_REPORT_TYPE: [
      {
        name: "Transaction F&B",
        value: "TRX_OUTLET"
      },
      {
        name: "Canceled Transaction F&B",
        value: "TRX_OUTLET_CANCELLED"
      },
      {
        name: "Reversed Transaction F&B",
        value: "TRX_OUTLET_REVERSE"
      },
      {
        name: "Transaction Hotel",
        value: "TRX_HOTEL"
      },
      {
        name: "Canceled Transaction Hotel",
        value: "TRX_HOTEL_CANCELLED"
      },
      {
        name: "Reversed Transaction Hotel",
        value: "TRX_HOTEL_REVERSE"
      },
      {
        name: "Sign Up Bonus Point",
        value: "SIGN_UP_BONUS_POINT"
      },
      {
        name: "Redemption F&B Burned",
        value: "REDEMPTION_OUTLET_BURNED"
      },
      {
        name: "Redemption F&B Unburned",
        value: "REDEMPTION_OUTLET_UNBURNED"
      },
      {
        name: "Redemption Hotel burned",
        value: "REDEMPTION_HOTEL_BURNED"
      },
      {
        name: "Redemption Hotel Unburned",
        value: "REDEMPTION_HOTEL_UNBURNED"
      },
      {
        name: "Add Deduct Reserve",
        value: "ADD_DEDUCT_RESERVE"
      }
    ],
    HOME_BANNER_TYPE: [
      {
        name: "Encounter",
        value: "ENCOUNTER"
      },
      {
        name: "Hotel Promotion",
        value: "HOTEL_PROMOTION"
      },
      {
        name: "Challenge",
        value: "CHALLENGE"
      }
    ],
    BENEFIT_ONLINE: [
      {
        name: "% Discount",
        value: "PERCENTAGE_DISCOUNT"
      },
      {
        name: "PLU",
        value: "PLU"
      }
    ],
    VOUCHER_STATUS: [
      {
        name: "Available",
        type: "success",
        value: "AVAILABLE"
      },
      {
        name: "Burned",
        type: "info",
        value: "BURNED"
      },
      {
        name: "Unburned",
        type: "info",
        value: "UNBURNED"
      },
      {
        name: "Expired",
        type: "danger"
      }
    ],
    STATUS_COMPLETE: [
      {
        name: "Assigned",
        value: "ASSIGNED"
      },
      {
        name: "Completed",
        value: "COMPLETED"
      },
      {
        name: "Not Completed",
        value: "NOT_COMPLETED"
      },
      {
        name: "Expired",
        value: "EXPIRED"
      }
    ]
  }
};

export default CONSTANTS;
