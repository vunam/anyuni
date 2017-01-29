docker run -d -p 9200:9200 \
  --name es-image1 \
  --network es-net \
  -v "$PWD/storage":/usr/share/elasticsearch/data \
  --cap-add=IPC_LOCK --ulimit nofile=65536:65536 --ulimit memlock=-1:-1 \
  --memory="2g" --memory-swap="2g" --memory-swappiness=0 \
  -e ES_HEAP_SIZE="1g" \
  es-image \
  -Des.bootstrap.mlockall=true \
  -Des.network.host=_eth0_ \
  -Des.discovery.zen.ping.multicast.enabled=false