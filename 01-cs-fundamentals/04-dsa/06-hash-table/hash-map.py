class HashMap:
    def __init__(self, size):
        self.buckets = [[] for i in range(size)]
        self.size = size

    def _hash(self, key):
        hash = 0
        for i in key:
            hash += ord(i)
        return hash % self.size

    def set(self, key, value):
        index = self._hash(key)
        bucket = self.buckets[index]
        for kv_pair in bucket:          
            if kv_pair[0] == key:
                kv_pair[1] = value
                return                  
        bucket.append([key, value])

    def get(self, key):
        index = self._hash(key)
        bucket = self.buckets[index]
        for kv_pair in bucket:
            if kv_pair[0] == key:
                return kv_pair[1]
        return None

map = HashMap(20)
map.set("name", "Sabbir")
map.set("role", "Backend Engineer")
map.set("age", 25)

print(map.get("name"))  
print(map.get("role"))  