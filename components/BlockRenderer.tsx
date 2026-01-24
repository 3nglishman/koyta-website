export default function BlockRenderer({ block }: any) {
  return (
    <pre style={{ padding: 20, background: "#fff" }}>
      {JSON.stringify(block, null, 2)}
    </pre>
  );
}
