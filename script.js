function calculate() {
  const attacker = document.getElementById("attacker").value;
  const move = document.getElementById("move").value;
  const atkRank = parseInt(document.getElementById("atkRank").value);
  const defRank = parseInt(document.getElementById("defRank").value);

  // 仮の種族値と技威力
  const baseAttack = attacker === "リザードン" ? 84 : 130; // 例: A種族値
  const power = move === "フレアドライブ" ? 120 : 110;     // 威力

  // ランク補正簡易計算（実際には係数で調整する）
  const atkModifier = rankModifier(atkRank);
  const defModifier = rankModifier(defRank);

  const damage = Math.floor((baseAttack * atkModifier * power) / (50 * defModifier));

  document.getElementById("result").innerText =
    `${attacker} の ${move} は ${damage} のダメージ（簡易版）`;
}

function rankModifier(rank) {
  if (rank >= 0) return (2 + rank) / 2;
  else return 2 / (2 - rank);
}
