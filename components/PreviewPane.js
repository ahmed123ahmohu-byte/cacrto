import { buildPreviewDocument } from '@/utils/codeUtils';

export default function PreviewPane({ previewCode }) {
  if (!previewCode) {
    return (
      <div className="glass flex h-full min-h-[280px] items-center justify-center rounded-3xl p-6 text-center text-blue-100/80">
        Live Code Preview سيظهر هنا تلقائياً عند إرسال كود.
      </div>
    );
  }

  const doc = buildPreviewDocument(previewCode);

  return (
    <div className="glass h-full rounded-3xl p-3">
      <iframe className="preview-frame" srcDoc={doc} title="Nexa live preview" sandbox="allow-scripts" />
    </div>
  );
}
