export function OgImage({ label }: { label: string }) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "64px",
        position: "relative",
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#f7f8f8",
        color: "#14263d",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 24, fontWeight: 600 }}>
        <div style={{ display: "flex", width: 56, height: 56, alignItems: "center", justifyContent: "center", borderRadius: 6, background: "#183b69", color: "white", fontSize: 19 }}>RM.</div>
        Portofolio Mahasiswa
      </div>
      <div style={{ display: "flex", maxWidth: 1040, flexDirection: "column", gap: 16 }}>
        <div style={{ color: "#183b69", fontSize: 22, fontWeight: 700, letterSpacing: 5, textTransform: "uppercase" }}>{label}</div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700, letterSpacing: -4 }}>Muhammad Rizal Mahdi<span style={{ color: "#315e91" }}>.</span></div>
        <div style={{ color: "#526277", fontSize: 30 }}>Web Development / UI/UX / Data</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #d6dfe7", paddingTop: 22, color: "#526277", fontSize: 20 }}>
        <span>Mahasiswa Sistem Informasi</span>
        <span>Universitas Gunadarma</span>
      </div>
      <div style={{ display: "flex", position: "absolute", top: -120, right: -90, width: 430, height: 430, border: "1px solid #b9c9d9", transform: "rotate(18deg)" }} />
    </div>
  );
}
