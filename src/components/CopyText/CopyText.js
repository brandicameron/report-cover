import styles from '../CopyText/CopyText.module.css';
import { useState } from 'react';
import Checkmark from '../../images/check.svg';
import CopyIcon from '../../images/copy.svg';

export default function CopyText({ data }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    setCopied(true);
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      console.log(e);
    }
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className={styles.copyText}>
      <p className={styles.text}>{`Home Inspection - ${data.address}`}</p>
      <button
        onClick={() => copyToClipboard(`Home Inspection - ${data.address}`)}
        className={copied ? `${styles.copied}` : ``}
      >
        <img src={copied ? Checkmark : CopyIcon} alt='Copy to Clipboard' />
      </button>
    </div>
  );
}
