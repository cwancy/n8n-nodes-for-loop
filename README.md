![n8n banner](https://oxylabs.io/_next/image?url=https:%2F%2Fimages.prismic.io%2Foxylabs-web%2FZ_0ZvuvxEdbNPBTc_n8nlogo.png%3Fauto%3Dformat%2Ccompress&w=3840&q=75 'n8n Logo')

# For Loop Node for n8n

This repository provides a custom control-flow node for n8n that performs a fixed-count loop. The node exposes two outputs:

- **loop**: emitted for each iteration.
- **done**: emitted after all iterations have completed.

The node is functionally similar to a traditional for-loop. It executes the connected branch a specified number of times and then exits through the done output.

---

## Docker

```bash
docker compose build
docker compose up -d
```

---

## Considerations

This node is still in active development, and features are not final. The node is also awaiting approval to become a community shared node.

---

## License

MIT
