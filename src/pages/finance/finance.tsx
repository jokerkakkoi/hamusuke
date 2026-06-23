import { Ellipsis, Plus } from "lucide-react";

const WEEK_DAYS = ["周三", "周四", "周五", "周六", "周日", "周一", "周二"] as const;

const MOCK_TRANSACTIONS = [
  {
    id: "1",
    type: "income" as const,
    title: "收红包",
    subtitle: undefined,
    amount: "+200.00",
  },
  {
    id: "2",
    type: "expense" as const,
    title: "三餐",
    subtitle: "早饭",
    amount: "-2.50",
  },
];

function FinanceHero() {
  return (
    <section
      className="relative min-h-[168px] overflow-hidden px-5 pb-6 pt-8 text-white"
      aria-label="本月收支概览"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%), url('https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=1200&q=80')",
        }}
      />
      <div className="relative z-10">
        <p className="text-sm font-medium text-white/90">月支出</p>
        <p className="mt-1 text-4xl font-semibold tracking-tight tabular-nums">
          2.50
        </p>
        <div className="mt-6 flex items-end justify-between text-sm text-white/95">
          <p className="tabular-nums">
            月收入 <span className="font-medium">200.00</span>
          </p>
          <p className="tabular-nums">
            本月结余 <span className="font-medium">197.50</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function WeeklySummaryCard() {
  const incomeHeight = 72;
  const expenseHeight = 4;
  const activeDayIndex = 0;

  return (
    <section className="mx-4 -mt-4 rounded-2xl bg-white px-4 py-4 shadow-sm">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-base font-semibold text-gray-900">最近7日汇总</h2>
          <p className="mt-1 text-xs text-gray-500 tabular-nums">
            收入: 200.00, 支出: 2.50
          </p>
        </div>
        <button
          type="button"
          className="rounded-full p-1.5 text-gray-500 hover:bg-gray-100"
          aria-label="更多选项"
        >
          <Ellipsis className="size-5" />
        </button>
      </div>

      <div className="mt-5 flex h-24 items-end justify-between gap-1 border-b border-gray-100 pb-2">
        {WEEK_DAYS.map((day, index) => {
          const isActive = index === activeDayIndex;
          return (
            <div
              key={day}
              className="flex flex-1 flex-col items-center justify-end gap-1"
            >
              <div className="flex h-[76px] w-full max-w-[28px] flex-col items-center justify-end">
                {isActive ? (
                  <>
                    <div
                      className="w-2 rounded-sm bg-emerald-500"
                      style={{ height: incomeHeight }}
                    />
                    <div
                      className="mt-0.5 w-2 rounded-sm bg-rose-400"
                      style={{ height: expenseHeight }}
                    />
                  </>
                ) : (
                  <div className="h-1 w-2 rounded-sm bg-transparent" />
                )}
              </div>
              <span className="text-[11px] text-gray-500">{day}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function TransactionListCard() {
  return (
    <section className="mx-4 mt-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-50 pb-3 text-sm">
        <span className="font-medium text-gray-800">06.17 周三</span>
        <span className="text-xs text-gray-500 tabular-nums">
          收:¥200.00 支:¥2.50
        </span>
      </div>

      <ul className="divide-y divide-gray-50">
        {MOCK_TRANSACTIONS.map((item) => {
          const isIncome = item.type === "income";
          return (
            <li
              key={item.id}
              className="flex items-center justify-between gap-3 py-3.5"
            >
              <div className="flex min-w-0 flex-1 items-center gap-3">
                <span
                  className={`size-2 shrink-0 rounded-full ${
                    isIncome ? "bg-emerald-500" : "bg-rose-400"
                  }`}
                  aria-hidden
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-gray-900">
                    {item.title}
                  </p>
                  {item.subtitle ? (
                    <p className="truncate text-xs text-gray-400">
                      {item.subtitle}
                    </p>
                  ) : null}
                </div>
              </div>
              <span
                className={`shrink-0 text-sm font-medium tabular-nums ${
                  isIncome ? "text-emerald-600" : "text-rose-500"
                }`}
              >
                {item.amount}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function AddRecordFab() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-[calc(var(--bottom-bar-height)+12px)] z-40 flex justify-center">
      <button
        type="button"
        className="pointer-events-auto flex size-14 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg shadow-sky-500/35 transition hover:bg-sky-600 active:scale-95"
        aria-label="记一笔"
      >
        <Plus className="size-7 stroke-[2.5]" />
      </button>
    </div>
  );
}

export default function FinancePage() {
  return (
    <div className="relative min-h-full bg-[#f3f4f6] pb-28">
      <FinanceHero />
      <WeeklySummaryCard />
      <TransactionListCard />
      <AddRecordFab />
    </div>
  );
}